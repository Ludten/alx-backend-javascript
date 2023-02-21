const app = require('http');

module.exports = app.createServer((_req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
