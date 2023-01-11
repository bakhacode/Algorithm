// [BOJ]Bronze3/최댓값/9m/23-01-12
// https://www.acmicpc.net/problem/2562

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

const numbers = input

let getMaxNum = function(array){
    let original = array.map(Number);
    let sorted = array.map(Number).sort((a,b) => a - b);
    let maxNum = sorted[sorted.length - 1];
    let maxNumWhere = ''
    for(i = 0; i < original.length; i++){
        if(original[i] === maxNum){
            maxNumWhere = i + 1;
        }
    }
    console.log(maxNum + '\n' + maxNumWhere)
}

getMaxNum(numbers);

//9m