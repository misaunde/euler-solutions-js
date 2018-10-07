const { performance } = require('perf_hooks');
var _ = require('lodash');

function isValid(divisors, num) {
    return divisors.find(d => num % d != 0) == null;
}

function smallestMultiple(size) {
    let divisors = _.range(2, size + 1);
    return _.range(size, 1000000000, size).find(n => isValid(divisors, n))
}

t0 = performance.now();
console.log("min: ", smallestMultiple(20))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// min:  232792560
// time:  3395.767244040966 ms
//==============================