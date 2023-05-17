const http = require('node:http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // req (request) -> server
  // server -> res (response)
  console.log(req.method, req.url);
  const url = req.url;

  if (url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else if (url === '/user') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ firstName: 'John', lastName: 'Smith', age: 45 }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  }
});

// Now that server is running
server.listen(1337, '127.0.0.1', () => {
  console.log('Server is running on port 1337');
});