// [BOJ]Bronze3/최댓값/21m55s/23-02-15
// https://www.acmicpc.net/problem/2566

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const arr = [];
const maxArr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number));
    maxArr.push(Math.max(...input[i].split(" ").map(Number)));
}

const max = Math.max(...maxArr);

const row = maxArr.indexOf(max) + 1;
const column = arr[row - 1].indexOf(max) + 1;

console.log(max + "\n" + row + " " + column);

//21m55s
