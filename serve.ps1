$port = 8080
$path = "C:\Users\princ\.gemini\antigravity\scratch\ip-sakti-path"

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)
$listener.Start()

$ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notmatch "^169\." -and $_.IPAddress -ne "127.0.0.1" } | Select-Object -ExpandProperty IPAddress

Write-Host "=========================================================="
Write-Host " IP SAKTI PATH MULTI-DEVICE SERVER IS LIVE!"
Write-Host " For You (This PC):    http://localhost:$port"
foreach ($ip in $ips) {
    Write-Host " For Team Members:     http://$ip`:$port"
}
Write-Host "=========================================================="

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        
        $requestLine = $reader.ReadLine()
        if ($requestLine) {
            $tokens = $requestLine.Split(' ')
            if ($tokens.Length -ge 2) {
                $rawUrl = $tokens[1].Split('?')[0]
                $relPath = $rawUrl.TrimStart('/')
                if ([string]::IsNullOrWhiteSpace($relPath)) { $relPath = "index.html" }
                $relPath = $relPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
                $localFile = Join-Path $path $relPath

                if (Test-Path $localFile -PathType Leaf) {
                    $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
                    $mime = $mimeTypes[$ext]
                    if (!$mime) { $mime = "application/octet-stream" }
                    $bytes = [System.IO.File]::ReadAllBytes($localFile)

                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $notFound = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nConnection: close`r`n`r`n404 Not Found"
                    $notBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                    $stream.Write($notBytes, 0, $notBytes.Length)
                }
            }
        }
        $stream.Flush()
        $client.Close()
    } catch {
        # continue loop
    }
}