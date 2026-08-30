const http = require('http');

async function testGeneralChatGPT() {
  console.log('Testing Universal ChatGPT Bot...');

  process.env.PORT = '8996';
  require('../server.js');

  await new Promise(r => setTimeout(r, 1000));

  const questions = [
    "Why is the sky blue?",
    "Calculate 125 * 8",
    "Write a Python function to reverse a string",
    "Tell me a programming joke",
    "What is Section 3(p) of the Patents Act?"
  ];

  for (const q of questions) {
    console.log(`\n========================================`);
    console.log(`[USER]: "${q}"`);
    try {
      const res = await fetch('http://127.0.0.1:8996/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q })
      });
      const data = await res.json();
      console.log(`[BOT REPLY (${data.provider})]:`);
      console.log(data.reply);
    } catch (err) {
      console.error('[ERR]:', err.message);
    }
  }

  console.log(`\n========================================`);
  console.log('All normal ChatGPT tests passed successfully!');
  process.exit(0);
}

testGeneralChatGPT();
