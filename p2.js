const { performance } = require('perf_hooks');

function evenfib(maxVal) {
    let seq = [1, 2];
    let even = 2;
    while(even < maxVal) {
        let newNum = seq[seq.length-1] + seq[seq.length-2];
        seq.push(newNum)
        if (newNum%2 == 0)
            even += newNum;
    }
    return even;
}

let t0 = performance.now();
console.log("sum: ", evenfib(4000000))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// sum:  4613732
// time:  1.7530840039253235 ms
//==============================