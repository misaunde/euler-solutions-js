const { performance } = require('perf_hooks');
var _ = require('lodash');

function multiples() {
    const multiples = _.range(0,1000).filter(n => n%3==0 || n%5==0)
    return _.sum(multiples);
}

t0 = performance.now();
console.log("sum: ", multiples());
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// sum:  266333
// time:  0.24497300386428833 ms
//==============================