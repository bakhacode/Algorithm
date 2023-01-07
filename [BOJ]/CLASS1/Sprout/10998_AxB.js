//[입력과 계산]
//[BOJ]Bronze5/AxB/5s/23-01-08
//https://www.acmicpc.net/problem/10998

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [a, b] = input

let result = a * b

console.log(result);