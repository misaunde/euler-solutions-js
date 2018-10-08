const { performance } = require('perf_hooks');

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function maxPalindrome(high, low) {
    let valid = [];
    for (var i=high; i>=low; i--) {
        for (var j=high; j>low; j--) {
            if (isPalindrome(i*j))
                valid.push([i*j])
        }
    }
    return Math.max(...valid);
}

let t0 = performance.now();
console.log(maxPalindrome(999,100));
console.log("time: ", (performance.now() - t0) + " ms");

//==============================
// max: 906609
// time:  515.229515016079 ms
//==============================
