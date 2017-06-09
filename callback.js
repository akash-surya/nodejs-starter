var maxTime = 1000;

var eventDobuler = function (input, fn) {
    var time = Math.floor(Math.random()*(maxTime + 1));
    if(input % 2) {
        setTimeout(function() {
            fn(new Error("Odd number"));
        }, time);
    } else {
        setTimeout(function() {
            fn(null, 2* input, time);
        }, time);
    }
};


var fn = function(err, result, time) {
    if (err) {
        console.log("Error !!");
    } else {
        console.log("Result is : " + result + ", time taken : " + time);
    }
};

for(var i=0; i<10; i++) {
    eventDobuler(i, fn);
}

console.log("--------");