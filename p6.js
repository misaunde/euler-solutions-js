const { performance } = require('perf_hooks');
var _ = require('lodash');

function sumSquareDifference(size) {
    const squareOfSums = Math.pow(_.range(1,size + 1).reduce((a,b) => a+b), 2);
    const sumOfSquares = _.range(1, size + 1).reduce((a,b) => a + Math.pow(b, 2));
    return squareOfSums - sumOfSquares;
}

t0 = performance.now();
console.log("diff: ", sumSquareDifference(100))
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// diff:  25164150
// time:  1.7151089906692505 ms
//==============================