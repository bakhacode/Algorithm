// [BOJ]Bronze3/지능형 기차2/12m44s/23-02-24
// https://www.acmicpc.net/problem/2460

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const arr = input.map((el) => el.split(" ").map(Number));

let people = 0;

let sumArr = [];

for (let i = 0; i < arr.length; i++) {
    people = people - arr[i][0] + arr[i][1];
    sumArr.push(people);
}

const result = Math.max(...sumArr);

console.log(result);

//12m44s
