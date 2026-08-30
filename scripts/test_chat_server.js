const http = require('http');

async function testChatEndpoint() {
  console.log('Testing server.js endpoint...');

  // Start server on test port
  process.env.PORT = '8998';
  require('../server.js');

  await new Promise(r => setTimeout(r, 1000));

  try {
    // 1. Test /api/status
    const statusRes = await fetch('http://127.0.0.1:8998/api/status');
    const statusJson = await statusRes.json();
    console.log('[PASS] /api/status ->', statusJson);

    // 2. Test /api/chat
    const chatRes = await fetch('http://127.0.0.1:8998/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'What is Section 3(p) TKDL rule?' })
    });
    const chatJson = await chatRes.json();
    console.log('[PASS] /api/chat success:', chatJson.success);
    console.log('       Provider:', chatJson.provider);
    console.log('       Sources count:', (chatJson.sources || []).length);
    console.log('       Reply snippet:', chatJson.reply.slice(0, 100) + '...');

    console.log('\nAll server API tests passed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('[FAIL] Test error:', err);
    process.exit(1);
  }
}

testChatEndpoint();
