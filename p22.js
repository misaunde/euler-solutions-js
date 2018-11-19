const { performance } = require('perf_hooks');
var _ = require('lodash');
var fs = require('fs');


function namesScore() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let letterIndexMap = alphabet.reduce((acc, curr, index) => {
        acc[curr] = index+1
        return acc;
    }, {});

    let names = fs.readFileSync('./assets/names.txt', 'utf8').replace(/\"/g,'').split(",").sort();
    let scores = names.map((n, index) => {
        let letters = n.toLowerCase().split("");
        let nameSum = letters.map(l => letterIndexMap[l]).reduce((a,b) => a+b);
        return nameSum * (index+1);
    });
    return _.sum(scores);
}


let t0 = performance.now();
console.log("result: ", namesScore());
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  871198282
// time:  19.664924999698997 ms
//==============================