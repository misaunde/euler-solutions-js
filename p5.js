const { performance } = require('perf_hooks');
var _ = require('lodash');

function isValid(divisors, num) {
    return divisors.find(d => num%d != 0) == null;
}

function smallestMultiple(size) {
    let divisors = _.range(2, size + 1);
    let count = size;
    while (true) {
        if (isValid(divisors, count)) {
            return count;
        }
        count += size;
        if (count%3 != 0 || count%7 !=0)
            count += size;
    }
}

let t0 = performance.now();
console.log("min: ", smallestMultiple(20))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// min:  232792560
// time:  885.5365419387817 ms
//==============================