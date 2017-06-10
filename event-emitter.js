var EventEmitter = require("events").EventEmitter;

var eventFn = function(input) {
   var e  = new EventEmitter();
   process.nextTick(function () {
      var count = 0;
      e.emit('start');
      var t = setInterval(function () {
          e.emit('data', ++count);
          if(count == input) {
              clearInterval(t);
              e.emit('end', input);
          }
      }, 1000);
   });
   
   return(e);
};

var e = eventFn(5);

e.on('start', function() {
    console.log("I am starting");
});

e.on('data', function(data) {
    console.log("I was called with data",  data);
});

e.on('end', function(data) {
    console.log("I just ended with data ", data);
});