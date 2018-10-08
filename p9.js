const { performance } = require('perf_hooks');
var _ = require('lodash');


function findTriplet(size) {
    let triplets = [];
    for (var i=1; i<=size; i++) {
        for (var j=i; j<=size; j++) {
            for (var k=j; k<=size; k++) {
                if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
                    triplets.push([i,j,k]);
                }
            }
        }
    }
    return triplets.find(t => t.reduce((a,b) => a+b) == size)
                   .reduce((a,b) => a*b);
}

let t0 = performance.now();
console.log("product: ", findTriplet(1000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// product:  31875000
// time:  1014.4216198921204 ms
//==============================