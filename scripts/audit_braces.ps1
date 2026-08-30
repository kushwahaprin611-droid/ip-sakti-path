$files = @(
  "js/i18n/translations.js",
  "js/audio/SoundSynth.js",
  "js/ai/SaktiSahayakRAG.js",
  "js/core/KnowledgeCoreVisualizer.js",
  "js/journey/IPJourneyEngine.js",
  "js/constellation/IPConstellation.js",
  "js/passport/IPPassportGenerator.js",
  "js/vault/SourceVault.js",
  "js/evidence/EvidenceChain.js",
  "js/lenses/MultiLensAnalyzer.js",
  "js/judge/JudgeModeTour.js",
  "js/toys/AyurToyLab.js",
  "js/app.js"
)

Write-Host "=== AUDITING JAVASCRIPT FILES ==="
$errors = 0
foreach ($f in $files) {
  $p = Join-Path (Get-Location) $f
  if (!(Test-Path $p)) {
    Write-Host "[MISSING] $f" -ForegroundColor Red
    $errors++
    continue
  }
  $content = Get-Content $p -Raw
  
  # Basic bracket balance check
  $openBraces = ($content.ToCharArray() | Where-Object { $_ -eq '{' }).Count
  $closeBraces = ($content.ToCharArray() | Where-Object { $_ -eq '}' }).Count
  if ($openBraces -ne $closeBraces) {
    Write-Host "[BRACE MISMATCH] $f (Open: $openBraces, Close: $closeBraces)" -ForegroundColor Red
    $errors++
  } else {
    Write-Host "[PASS BRACES] $f ({}=$openBraces)" -ForegroundColor Green
  }
}
Write-Host "Total Brace Audit Errors: $errors"
