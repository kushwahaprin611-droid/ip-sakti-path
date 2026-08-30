const fs = require('fs');
const path = require('path');

function getAllFiles(dir, allFiles = []) {
  if (!fs.existsSync(dir)) return allFiles;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, allFiles);
    } else if (file.endsWith('.js')) {
      allFiles.push(filePath);
    }
  }
  return allFiles;
}

const jsFiles = getAllFiles(path.join(__dirname, 'js'));
console.log('Auditing ' + jsFiles.length + ' JavaScript files in ./js ...\n');

let errorCount = 0;
const vm = require('vm');
for (const file of jsFiles) {
  const relPath = path.relative(__dirname, file);
  try {
    const content = fs.readFileSync(file, 'utf8');
    try {
      new vm.Script(content);
      console.log('[PASS (Script)] ' + relPath);
    } catch (scriptErr) {
      try {
        new vm.SourceTextModule(content);
        console.log('[PASS (Module)] ' + relPath);
      } catch (modErr) {
        console.error('[FAIL] ' + relPath + ': ' + (modErr.message || scriptErr.message));
        errorCount++;
      }
    }
  } catch (err) {
    console.error('[ERROR reading ' + relPath + ']: ' + err.message);
    errorCount++;
  }
}

console.log('\nAuditing index.html and referenced assets...');
const indexPath = path.join(__dirname, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('[FAIL] index.html missing!');
  errorCount++;
} else {
  const html = fs.readFileSync(indexPath, 'utf8');
  const scriptMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
  const cssMatches = [...html.matchAll(/<link[^>]+href=["']([^"']+)["']/g)].map(m => m[1]);

  for (const s of scriptMatches) {
    const assetPath = path.join(__dirname, s);
    if (!fs.existsSync(assetPath)) {
      console.error('[BROKEN ASSET] Script not found: ' + s);
      errorCount++;
    } else {
      console.log('[PASS] Script asset: ' + s);
    }
  }

  for (const c of cssMatches) {
    if (c.endsWith('.css') || c.endsWith('.json')) {
      const assetPath = path.join(__dirname, c);
      if (!fs.existsSync(assetPath)) {
        console.error('[BROKEN ASSET] CSS/link not found: ' + c);
        errorCount++;
      } else {
        console.log('[PASS] Link asset: ' + c);
      }
    }
  }
}

console.log('\nAudit Complete. Total critical errors: ' + errorCount);
process.exit(errorCount > 0 ? 1 : 0);
