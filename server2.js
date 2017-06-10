var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
   res.writeHead(200, {"Content-Type": "text/plain"});
   if(req.url == '/file.txt') {
       fs.createReadStream(__dirname + "/README.md").pipe(res);
   } else {
       res.end("Hello world");
   }
}).listen(process.env.PORT, process.env.IP);

console.log("Server has started");