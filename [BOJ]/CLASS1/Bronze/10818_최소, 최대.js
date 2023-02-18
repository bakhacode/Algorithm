// [BOJ]Bronze3/최소, 최대/4m23s/23-02-19
// https://www.acmicpc.net/problem/10818

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const num = input[1].split(" ").map(Number);

console.log(Math.min(...num) + " " + Math.max(...num));

//4m23s
