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

$bundleHeader = @"
// Self-Contained Standalone Bundle for IP SAKTI PATH (Official SIH 2026 Edition)
(function() {
'use strict';

"@

$bundleBody = ""

foreach ($f in $files) {
  $p = Join-Path (Get-Location) $f
  if (Test-Path $p) {
    $content = Get-Content $p -Raw
    # Strip import statements
    $clean = $content -replace "(?m)^import\s+.*?from\s+['""].*?['""];?\s*`r?`n?", ""
    # Strip export class/const/let/var/function
    $clean = $clean -replace "(?m)^export\s+(default\s+)?(class|const|let|var|function)\s+", "`$2 "
    # Strip export { ... }
    $clean = $clean -replace "(?m)^export\s*\{[^}]*\};?\s*`r?`n?", ""
    
    $bundleBody += "`n// --- File: $f ---`n" + $clean
    Write-Host "Bundled: $f"
  } else {
    Write-Host "File missing: $f" -ForegroundColor Red
  }
}

$bundleFooter = @"

// Global Application Auto-Instantiation
window.addEventListener('DOMContentLoaded', () => {
  if (typeof App !== 'undefined') {
    window.saktiApp = new App();
  }
});

})();
"@

$fullBundle = $bundleHeader + $bundleBody + $bundleFooter
Set-Content -Path "js/bundle.js" -Value $fullBundle -Encoding UTF8
$outSize = (Get-Item "js/bundle.js").Length
Write-Host "Successfully generated ./js/bundle.js ($outSize bytes)" -ForegroundColor Green
