const { performance } = require('perf_hooks');
var _ = require('lodash');


//from p12.js
function divisors(num) {
    const isEven = num % 2 === 0;
    let inc = isEven ? 1 : 2;
    let factors = [1]; //omitting original number
  
    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
      if (num % curFactor !== 0) continue;
      factors.push(curFactor);
      let compliment = num / curFactor;
      if (compliment !== curFactor) factors.push(compliment);
    }
    return factors;
}

function amicableNumbers(n) {
  let divs = {}
  _.range(0,n).map(n => divs[n] = _.sum(divisors(n)))
  let sum = Object.entries(divs)
                  .filter(([k,v]) => divs[v] == k && v != k)
                  .reduce((result, [k, v]) => parseInt(result) + parseInt(k));
  return sum;
}


let t0 = performance.now();
console.log("result: ", amicableNumbers(10000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  31626
// time:  20.504092999733984 ms
//==============================