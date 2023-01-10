// [함수]
// [BOJ]Bronze5/검증수/5m/23-01-11
// https://www.acmicpc.net/problem/2475

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ')

let uniqueNumber = input

const calc = function(array){
    let square = [];
    for(i = 0; i < array.length; i++){
        square.push(array[i] * array[i]);
    }
    let result = (square.reduce((prev, cur) => {return prev + cur})) % 10
    return result
}

console.log(calc(uniqueNumber));

//5m