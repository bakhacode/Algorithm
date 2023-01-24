// [BOJ]Bronze2/나머지/8m/23-01-24
// https://www.acmicpc.net/problem/3052

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const sum = input;

const newArr = [];

for (let i = 0; i < sum.length; i++) {
    newArr.push(sum[i] % 42);
}
newArr.sort((a, b) => a - b);

const uniqueArr = newArr.filter((el, idx) => {
    return newArr.indexOf(el) === idx;
});

console.log(uniqueArr.length);

//8분
