//[조건문]
//[BOJ]Bronze5/두 수 비교하기/5m/23-01-08
//https://www.acmicpc.net/problem/1330

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [a, b] = input

function compareNumber(a, b){
    if(a > b){
        return '>'
    }else if(a < b){
        return '<'
    }else{
        return '=='
    }
}
console.log(compareNumber(a, b));