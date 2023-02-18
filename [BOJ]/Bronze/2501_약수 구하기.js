// [BOJ]Bronze3/약수 구하기//23-02-19
// https://www.acmicpc.net/problem/2501

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ").map(Number);

const [n, k] = input;

const arr = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
}

if (arr.length < k) console.log(0);
else console.log(arr[k - 1]);

//7m41s
