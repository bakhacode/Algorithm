// [문자열]
// [BOJ]Bronze5/그대로 출력하기/10s/23-01-11
// https://www.acmicpc.net/problem/11718

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

console.log(input.join('\n'));