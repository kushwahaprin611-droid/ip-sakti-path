const fs = require('fs');
const [,, target, content] = process.argv;
fs.appendFileSync(target, Buffer.from(content, 'base64').toString('utf8'), 'utf8');
