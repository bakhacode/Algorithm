//[입력과 계산]
//[BOJ]Bronze5/꼬마 정민/30s/23-01-08
//https://www.acmicpc.net/problem/11382

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [a, b, c] = input

let calc = function(num1, num2, num3){
    return num1 + num2 + num3
}

console.log(calc(a, b, c));