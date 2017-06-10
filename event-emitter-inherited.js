var res = require("./resource");

var r = new res(7);

r.on('start', function () {
    console.log("I am starting");
});

r.on('data', function(data) {
    console.log("I am called with data " ,data);
});

r.on('end', function(data) {
    console.log("Just ended with data ", data);
})