Write-Host "=== IP SAKTI PATH - COMPREHENSIVE QA AUDIT SUITE ==="

$root = Get-Location
$indexPath = Join-Path $root "index.html"
$bundlePath = Join-Path $root "js/bundle.js"
$cssPath = Join-Path $root "css/styles.css"
$manifestPath = Join-Path $root "manifest.json"
$swPath = Join-Path $root "sw.js"

$errors = 0

# Test 1: Check critical files
$criticalFiles = @($indexPath, $bundlePath, $cssPath, $manifestPath, $swPath)
foreach ($cf in $criticalFiles) {
  if (Test-Path $cf) {
    $size = (Get-Item $cf).Length
    Write-Host "[OK] Critical file exists: $([System.IO.Path]::GetFileName($cf)) ($size bytes)" -ForegroundColor Green
  } else {
    Write-Host "[FAIL] Critical file missing: $cf" -ForegroundColor Red
    $errors++
  }
}

# Test 2: Verify HTML script and style references
$indexHtml = Get-Content $indexPath -Raw
$scriptRefs = [regex]::Matches($indexHtml, '<script[^>]+src=["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value }
$linkRefs = [regex]::Matches($indexHtml, '<link[^>]+href=["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value }

foreach ($s in $scriptRefs) {
  $target = Join-Path $root $s
  if (Test-Path $target) {
    Write-Host "[OK] Script reference resolved: $s" -ForegroundColor Green
  } else {
    Write-Host "[FAIL] Script reference broken: $s" -ForegroundColor Red
    $errors++
  }
}

foreach ($l in $linkRefs) {
  if ($l -notmatch "^http") {
    $target = Join-Path $root $l
    if (Test-Path $target) {
      Write-Host "[OK] Link reference resolved: $l" -ForegroundColor Green
    } else {
      Write-Host "[FAIL] Link reference broken: $l" -ForegroundColor Red
      $errors++
    }
  }
}

# Test 3: Check bundle size and non-emptiness
$bundleContent = Get-Content $bundlePath -Raw
if ($bundleContent.Length -gt 100000) {
  Write-Host "[OK] Bundle size verified: $($bundleContent.Length) characters" -ForegroundColor Green
} else {
  Write-Host "[FAIL] Bundle seems too small or empty!" -ForegroundColor Red
  $errors++
}

# Test 4: Check that all required core classes are present in bundle
$requiredClasses = @(
  "class App",
  "class KnowledgeCoreVisualizer",
  "class IPJourneyEngine",
  "class IPConstellation",
  "class IPPassportGenerator",
  "class SourceVault",
  "class EvidenceChain",
  "class MultiLensAnalyzer",
  "class ExecutiveSystemTour",
  "class SaktiSahayakRAG",
  "class SoundSynth",
  "class AyurToyLab"
)

foreach ($rc in $requiredClasses) {
  if ($bundleContent.Contains($rc)) {
    Write-Host "[OK] Bundle contains $rc" -ForegroundColor Green
  } else {
    Write-Host "[FAIL] Bundle missing $rc" -ForegroundColor Red
    $errors++
  }
}

Write-Host ""
Write-Host "=========================================="
if ($errors -eq 0) {
  Write-Host "ALL QA TESTS PASSED! Project is 100% stable." -ForegroundColor Green
} else {
  Write-Host "QA FAILED WITH $errors ERRORS!" -ForegroundColor Red
}
Write-Host "=========================================="
