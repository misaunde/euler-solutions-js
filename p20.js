const bigInt = require('big-integer');
const { performance } = require('perf_hooks');
var _ = require('lodash');


function factorial(n) {
    let result = _.range(n,0).reduce((a,b) => bigInt(b).times(a));
    let sum = result.toString().split("").reduce((a,b) => parseInt(a)+parseInt(b))
    return sum;
}


let t0 = performance.now();
console.log("result: ", factorial(100));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  648
// time:  2.841101884841919 ms
//==============================