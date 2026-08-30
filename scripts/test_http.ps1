$port = 8085
$path = (Get-Location).Path

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
$listener.Start()
Write-Host "Test listener started on $port"

# Trigger a web request in background job
$job = Start-Job -ScriptBlock {
    param($p)
    Start-Sleep -Milliseconds 200
    try {
        $res = Invoke-WebRequest -Uri "http://127.0.0.1:$p/" -UseBasicParsing
        return "HTTP Status: $($res.StatusCode), Length: $($res.Content.Length)"
    } catch {
        return "Error: $($_.Exception.Message)"
    }
} -ArgumentList $port

$client = $listener.AcceptTcpClient()
$stream = $client.GetStream()
$reader = New-Object System.IO.StreamReader($stream)
$line = $reader.ReadLine()
Write-Host "Request Line: $line"

$localFile = Join-Path $path "index.html"
$bytes = [System.IO.File]::ReadAllBytes($localFile)
$header = "HTTP/1.1 200 OK`r`nContent-Type: text/html; charset=utf-8`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
$headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
$stream.Write($headerBytes, 0, $headerBytes.Length)
$stream.Write($bytes, 0, $bytes.Length)
$stream.Flush()
$client.Close()
$listener.Stop()

$jobResult = Receive-Job -Job $job -Wait
Write-Host "Job Result: $jobResult"
Remove-Job -Job $job
