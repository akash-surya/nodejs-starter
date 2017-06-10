var request = require("request");
var zlib = require("zlib");
var fs = require("fs");

request('http://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gzip'));