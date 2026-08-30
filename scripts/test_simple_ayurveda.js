const http = require('http');

async function testSimpleQuestions() {
  process.env.PORT = '8994';
  require('../server.js');
  await new Promise(r => setTimeout(r, 1200));

  const questions = [
    "what is an Ayurveda",
    "why is the sky blue",
    "calculate 50 * 4"
  ];

  for (const q of questions) {
    console.log(`\n========================================`);
    console.log(`[USER QUESTION]: "${q}"`);
    const res = await fetch('http://127.0.0.1:8994/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: q })
    });
    const data = await res.json();
    console.log(`[BOT ANSWER]:`);
    console.log(data.reply);
  }
  process.exit(0);
}

testSimpleQuestions();
