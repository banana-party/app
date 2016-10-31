var http = require('http'); //add the http module

//Create a server
var myServer = http.createServer(function (request, response) {
  // Return something from server
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Node\n");
}); //create a server

Bind server to a port
myServer.listen(80);

console.log("Go to localhost:80 on your browser");