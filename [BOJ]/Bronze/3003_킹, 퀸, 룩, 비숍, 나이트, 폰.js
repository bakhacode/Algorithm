// [BOJ]Bronze5/킹, 퀸, 룩, 비숍, 나이트, 폰/19m31s/23-02-26
// https://www.acmicpc.net/problem/3003

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ").map(Number);

let answer = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < input.length; i++) {
    let num = "0";
    if (answer[i] === input[i]) {
        num = "0";
    } else num = (answer[i] - input[i]).toString();
    if (i === input.length - 1) result += num;
    else result += num + " ";
}

console.log(result);

//19m31s
