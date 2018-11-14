const bigInt = require('big-integer');
const { performance } = require('perf_hooks');
var _ = require('lodash');


function* triangleNumbers() {
    let prev = [];
    let sum = 0;
    while (true) {
        let next = prev[prev.length - 1]? prev[prev.length - 1] + 1 : 1;
        prev.push(next);
        sum += next
        yield sum;
    }
}

//being lazy: https://stackoverflow.com/a/43204663/3806701
function divisors(num) {
    const isEven = num % 2 === 0;
    let inc = isEven ? 1 : 2;
    let factors = [1, num];
  
    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
      if (num % curFactor !== 0) continue;
      factors.push(curFactor);
      let compliment = num / curFactor;
      if (compliment !== curFactor) factors.push(compliment);
    }
  
    return factors;
}

function divisibleTriangleNumbers(size) {
    let len = 0;
    const nums = triangleNumbers();
    let num;
    while (len < size) {
        num = nums.next().value;
        len = divisors(num).length;
    }
    return num;
}


let t0 = performance.now();
console.log("result: ", divisibleTriangleNumbers(500));
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// result:  76576500
// time:  235.71578001976013 ms
//==============================