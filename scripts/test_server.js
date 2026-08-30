const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  const relPath = (urlPath === '/' ? 'index.html' : urlPath.replace(/^\//, '')).replace(/\//g, path.sep);
  const filePath = path.join(__dirname, '..', relPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8999, '127.0.0.1', async () => {
  console.log('Test server running on http://127.0.0.1:8999');

  const urls = [
    'http://127.0.0.1:8999/',
    'http://127.0.0.1:8999/css/styles.css',
    'http://127.0.0.1:8999/js/bundle.js',
    'http://127.0.0.1:8999/manifest.json'
  ];

  let failed = false;
  for (const u of urls) {
    try {
      const res = await fetch(u);
      if (res.status === 200) {
        console.log(`[HTTP 200 OK] ${u} (${res.headers.get('content-type')})`);
      } else {
        console.error(`[HTTP ${res.status}] ${u}`);
        failed = true;
      }
    } catch (err) {
      console.error(`[ERROR] ${u}: ${err.message}`);
      failed = true;
    }
  }

  server.close(() => {
    console.log('Test server shut down cleanly.');
    process.exit(failed ? 1 : 0);
  });
});
