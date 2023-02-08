// [BOJ]Silver4/제로/40m/2023-02-08
// https://www.acmicpc.net/problem/10773

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let answer = "";

input.shift();

const array = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] == 0 && input.length > 0) array.pop();
    else array.push(input[i]);
}
if (array.length > 0) answer = array.map(Number).reduce((a, b) => a + b);
else answer = 0;

console.log(answer);

//23분 이거 어케해도 특정조건일 때 값 뺴는 방법을 몰라서 패스하고 찾아보려다가 해보고 해결함
//40m
