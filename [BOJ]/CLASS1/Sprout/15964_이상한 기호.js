// [함수]
// [BOJ]bronze5/이상한 기호/3m/23-01-11
// https://www.acmicpc.net/problem/15964

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [a, b] = input

const calc = function(a, b){
    return (a + b) * (a - b)
}

console.log(calc(a, b));

//3m