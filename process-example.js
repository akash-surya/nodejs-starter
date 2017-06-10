var process = require("process");

var stdin = process.stdin;
var stdout = process.stdout;
var stderr = process.stderr;


stdin.resume();
stdin.setEncoding('UTF-8');

stdin.on('data', function (chunk) {
    stdout.write("Data >> " + chunk);
});

stdin.on('end', function() {
    stderr.write("End !!");
})

stdin.on('SIGTERM', function() {
    stderr.write("DONT TRY TO TERMINATE ME!");
});

console.log("Process id is ", process.pid);