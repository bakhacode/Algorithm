// [문자열]
// [BOJ]Bronze5/단어 길이 재기/10s/23-01-11
// https://www.acmicpc.net/problem/2743

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const n = input;

console.log(n.length);