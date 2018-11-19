const { performance } = require('perf_hooks');
var Combinatorics = require('js-combinatorics');


function lexographicalPermutations(digits, n) {
    let permutations = Combinatorics.permutation(digits);
    return permutations.toArray()[n-1].join('');
}


let t0 = performance.now();
console.log("result: ", lexographicalPermutations([0,1,2,3,4,5,6,7,8,9], 1000000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  2783915460
// time:  9437.854420000687 ms
//==============================