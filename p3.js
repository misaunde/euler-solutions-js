const { performance } = require('perf_hooks');
var _ = require('lodash');

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function getPrimes(num) {
    return _.range(2, num).filter(x => isPrime(x));
}

let factors = [1];
function largestPrimeFactor(primes, val, origval) {
    for (var i=0; i<primes.length; i++) {
        if (factors.reduce((a, b) => a * b) == origval) {
            return Math.max(...factors);
        } else if (val % primes[i] == 0) {
            factors.push(primes[i])
            largestPrimeFactor(primes, val / primes[i], origval);
        }
    }
}

t0 = performance.now();
console.log("factor: ", largestPrimeFactor(getPrimes(10000), 600851475143, 600851475143));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// factor:  6857
// time:  23.73895698785782 ms
//==============================


