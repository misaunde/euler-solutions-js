const { performance } = require('perf_hooks');
var _ = require('lodash');

let numMap = {
    1:'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

function convertNumberToWord(number, word) {
    let nums = number.toString().split("").map(n => parseInt(n));
    let len = nums.length;

    // base case
    if (len == 0)
        return word;

    
    let curr = nums[0]
    if (len == 2) {
        if (parseInt(curr + '' + nums[1]) < 20)
            curr = parseInt(curr + '' + nums[1]);
        else 
            curr = parseInt(curr + '' + 0);
    }

    if (curr != 0) {
        let newWord = numMap[curr];
        if (newWord && (word.endsWith('hundred') || word.endsWith('thousand')))
            word += 'and'
        
        word += newWord;
    
        if (len == 4)
            word += 'thousand';
        else if (len == 3)
            word += 'hundred'
    }

    let next = len == 2 && curr < 20? nums.slice(2).join("") : nums.slice(1).join("");
    return convertNumberToWord(next, word);
}


function numberLetterCounts(n) {
    let len = 0;
    for (var i=1; i<=n; i++) {
        let word = convertNumberToWord(i, '');
        len += word.length;
    }
    return len;
}


let t0 = performance.now();
console.log("result: ", numberLetterCounts(1000));
console.log("time: ", (performance.now() - t0) + " ms");


//==============================
// result:  21124
// time:  10.671338081359863 ms
//==============================