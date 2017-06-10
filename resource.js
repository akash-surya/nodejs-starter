var util = require("util");
var eventEmitter = require("events").EventEmitter;


var fn = function(data) {
    var self = this;
    var count = 0;
    self.emit('start');
    var e = setInterval(function() {
        self.emit('data', ++count);
        if (count == data) {
            self.emit('end', data);
            clearInterval(e);
        }
    }, 1000);
};

util.inherits(fn, eventEmitter);

module.exports = fn;