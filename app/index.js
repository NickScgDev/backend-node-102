const http = require('http');

const port = 3000;

const server = http.createServer(function accessRoute(_, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("Hello Everyone");
  response.end();
})

server.listen(port, function () {
  console.log('App listen on port:', port);
});
