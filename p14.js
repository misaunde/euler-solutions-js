const { performance } = require('perf_hooks');
var _ = require('lodash');


function findSequenceLength(n) {
    let length = 0;
    while (n > 1) {
        n = n%2 == 0? n/2 : (3*n + 1);
        length++;
    }
    return length;
}

function findMaxSequenceLength(n) {
    let max = 0;
    let index = 0;
    for (var i=n; i>(n-n/5); i--) {
        let len = findSequenceLength(i);
        if (len > max) {
            max = len;
            index = i;
        }
    }   
    return index;
}


let t0 = performance.now();
console.log("result: ", findMaxSequenceLength(1000000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  837799
// time:  278.7630639076233 ms
//==============================