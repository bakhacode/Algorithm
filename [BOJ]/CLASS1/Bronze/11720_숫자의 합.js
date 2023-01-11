// [BOJ]Bronze4/숫자의 합/4m10s/23-01-12
// https://www.acmicpc.net/problem/11720

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

const numbers = input[1];

const calc = function(numbers){
    let arr = numbers.split('').map(Number);
    const result = arr.reduce((acc, cur) => acc + cur);

console.log(result);
};

calc(numbers);

//4m10s