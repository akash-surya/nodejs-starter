var http = require("http");

http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("Hello world");
}).listen(process.env.PORT, process.env.IP);

console.log("Server is running!");