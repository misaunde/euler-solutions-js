const { performance } = require('perf_hooks');

function evenfib(maxVal) {
    let n = [1, 2];
    let even = 2;
    while(even < maxVal) {
        let newNum = n[n.length-1] + n[n.length-2];
        n.push(newNum)
        if (newNum % 2 == 0)
            even += newNum;
    }
    return even;
}

t0 = performance.now();
console.log("fib: ", evenfib(4000000))
console.log("time: ", (performance.now() - t0) + " ms");


// fib:  4613732
// time:  2.888188123703003 ms
