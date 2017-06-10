var http = require("http");
var socketio = require("socket.io");
var fs = require("fs");
var process = require("process");

var app = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) {
            res.writeHead(500);
            res.end("Error while reading index.html");
        } else {
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.end(data);
        }
    })
});

var io = socketio.listen(app);

io.configure(function() {
   io.set("transports", ["xhr-polling"]); 
});

io.on("connection", function (socket) {
   socket.emit("start", "Server starting to send data");
   
   setInterval(function() {
       var timestamp = new Date().getTime();
       console.log("Sending the current timestamp over the wire : ", timestamp);
       socket.emit("time", timestamp);
   }, 1000);
   
   socket.on("submit", function (data) {
      console.log("Client submitted form with data :", data);
   });
});

app.listen(process.env.PORT, process.env.IP);

console.log("Server has started!!!");