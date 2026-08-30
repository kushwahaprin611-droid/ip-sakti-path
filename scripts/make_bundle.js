const fs = require('fs');
const path = require('path');

console.log('Building bundle.js...');

function readClean(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Strip import statements
  content = content.replace(/^import\s+.*?from\s+['\"].*?['\"];?\s*$/gm, '');
  // Strip export declarations
  content = content.replace(/^export\s+(default\s+)?(class|const|let|var|function)\s+/gm, '$2 ');
  content = content.replace(/^export\s*\{[^}]*\};?\s*$/gm, '');
  return `\n// --- File: ${filePath} ---\n` + content;
}

const files = [
  './js/i18n/translations.js',
  './js/audio/SoundSynth.js',
  './js/ai/SaktiSahayakRAG.js',
  './js/core/KnowledgeCoreVisualizer.js',
  './js/journey/IPJourneyEngine.js',
  './js/constellation/IPConstellation.js',
  './js/passport/IPPassportGenerator.js',
  './js/vault/SourceVault.js',
  './js/evidence/EvidenceChain.js',
  './js/lenses/MultiLensAnalyzer.js',
  './js/judge/JudgeModeTour.js',
  './js/toys/AyurToyLab.js',
  './js/assistant/FloatingAssistant.js',
  './js/app.js'
];

let bundleCode = `// Self-Contained Standalone Bundle for IP SAKTI PATH (Official SIH 2026 Edition)
(function() {
'use strict';
`;

for (const f of files) {
  if (fs.existsSync(f)) {
    bundleCode += readClean(f);
    console.log(`Bundled: ${f}`);
  } else {
    console.error(`File missing: ${f}`);
  }
}

bundleCode += `\n})();\n`;

fs.writeFileSync('./js/bundle.js', bundleCode, 'utf8');
console.log(`Successfully generated ./js/bundle.js (${bundleCode.length} bytes)`);
