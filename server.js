//separate way of creating server through a separate file

const http = require('http');
const app = require('../node-restapi-shopping/app');

const port = 3000 || process.env.PORT;

const server = http.createServer(app);

server.listen(port );


