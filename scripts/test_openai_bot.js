const http = require('http');

async function testBot() {
  console.log('Testing IP Sakti AI Bot Endpoint...');

  // Start test server on 8997
  process.env.PORT = '8997';
  require('../server.js');

  await new Promise(r => setTimeout(r, 1000));

  const testQueries = [
    "What is the difference between Section 3(p) and Section 3(e) under the Indian Patents Act?",
    "Explain what is Access and Benefit Sharing (ABS) under the Biological Diversity Act in simple words?",
    "Can you search the web for the latest FSSAI Ayurveda Aahar regulations?"
  ];

  for (const q of testQueries) {
    console.log(`\n[QUERY]: "${q}"`);
    try {
      const res = await fetch('http://127.0.0.1:8997/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q })
      });
      const data = await res.json();
      console.log(`[STATUS]: ${res.status} OK: ${data.success}`);
      console.log(`[PROVIDER]: ${data.provider}`);
      console.log(`[SOURCES]: ${(data.sources || []).map(s => s.title || s.url).join(' | ')}`);
      console.log(`[ANSWER]:\n${data.reply.slice(0, 200)}...\n`);
    } catch (err) {
      console.error('[ERROR]:', err.message);
    }
  }

  console.log('Bot tests completed successfully.');
  process.exit(0);
}

testBot();
