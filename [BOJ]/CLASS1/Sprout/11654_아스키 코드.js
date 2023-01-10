// [문자열]
// [BOJ]Bronze5/아스키 코드/1m/23-01-11
// https://www.acmicpc.net/problem/11654

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

let n = input

const result = n.charCodeAt(0);

console.log(result);