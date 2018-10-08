const { performance } = require('perf_hooks');
var _ = require('lodash');

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) 
        if (num % i == 0) 
            return false;
    return true;
}

function sumOfPrimes(num) {
    let sum = 0;
    let count = 2;

    while (true) {
        if (count > num)
            return sum;
        
        if (isPrime(count)) 
            sum += count;
        count++;
    }
}

let t0 = performance.now();
console.log("sum: ", sumOfPrimes(2000000))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// sum:  142913828922
// time:  1571.3492230176926 ms
//==============================