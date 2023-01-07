//[입출력과 사칙연산]
//[BOJ]Bronze5/A+B/1m/22-12-01
//https://www.acmicpc.net/problem/1000

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [a, b] = input

let result = a + b

console.log(result);