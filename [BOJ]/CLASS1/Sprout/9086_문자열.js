// [문자열]
// [BOJ]Bronze5/문자열/3m/23-01-11
// https://www.acmicpc.net/problem/9086

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let result = [];

for(i = 1; i <= input[0]; i++){
    let sum = []
    let arr = input[i].split('')
    sum.push(arr[0],arr[arr.length-1])
    result.push(sum.join(''))
}

console.log(result.join('\n'));

//3m