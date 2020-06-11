const express = require('express');
const path = require('path');

const server = express();

const port = 3000;

server.use(express.static(path.resolve(__dirname, './public')));

server.get('/hello/:name', function callHelloToUser(request, response) {
  const name = request.params.name;

  response.send(`
    <html>
      <head>
        <title>Hello ${name}. This is simple static website</title>
        <style>
          body {
            background-color: pink;
          }
        </style>
      </head>
      <body>
        Hello ${name} เป็นยังไงบ้าง <br />
        ไปเที่ยวกันไหม
      </body>
    </html>
  `);
});

server.listen(port, function (error) {
  if (error) {
    console.error('error');
  } else {
    console.log('App listen on port:', port);
  }
});
