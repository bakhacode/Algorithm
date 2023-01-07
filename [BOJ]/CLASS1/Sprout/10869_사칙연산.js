//[입력과 계산]
//[BOJ]Bronze5/사칙연산/5m/23-01-08
//https://www.acmicpc.net/problem/10869

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [a, b] = input

function calculator(a, b){
    let arr = [
        a+b,a-b,a*b,parseInt(a/b),a%b
    ];
    return arr

}

let result = calculator(a, b)

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);
