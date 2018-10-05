const { performance } = require('perf_hooks');
var _ = require('lodash');

function sumNum(start = 0, end = Infinity, step = 1) {
    let n = 0;
    for (let i=start; i<end; i += step) {
        n += i;
    }
    return n;
}



let t0 = performance.now();
console.log("sum: ", sumNum(0, 1000, 3) + sumNum(0, 1000, 5));
let t1 = performance.now();
console.log("time: ", (t1 - t0) / 1000);

//=============================
// sum?:  266333
// time:  0.0019370291233062743
//=============================




function lodash() {
    return _.sum(_.range(0, 1000, 3)) + _.sum(_.range(0, 1000, 5));
}

t0 = performance.now();
console.log("sum: ", lodash());
t1 = performance.now();
console.log("time: ", (t1 - t0) / 1000);

//=============================
// sum:  266333
// time:  0.0004896161556243897
//=============================