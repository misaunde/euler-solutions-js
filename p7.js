const { performance } = require('perf_hooks');
var _ = require('lodash');

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) 
        if (num % i == 0) 
            return false;
    return true;
}

function getPrime(position) {
    let index = 1;
    let value = 2;
    while (true) {
        value++;
        if (isPrime(value)) 
            index++;
        
        if (index == position)
            return value;
    }
}

let t0 = performance.now();
console.log("prime: ", getPrime(10001))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// prime:  104743
// time:  19.025837004184723 ms
//==============================