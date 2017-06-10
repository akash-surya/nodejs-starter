var http = require('http');
var process = require("process");

var options = {
    host: 'www.google.com',
    path: '/',
    method: 'GET'
};


var t = http.request(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

t.end();