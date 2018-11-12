const bigInt = require('big-integer');
const { performance } = require('perf_hooks');
var _ = require('lodash');


function powerDigitSum(n) {
    let big = bigInt(2).pow(n).toString();
    let parts =  big.split("").map(n => parseInt(n));
    return parts.reduce((a,b) => a+b);
}


let t0 = performance.now();
console.log("result: ", powerDigitSum(1000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  1366
// time:  2.843214988708496 ms
//==============================