// [BOJ]Bronze4/기찍 N/3m30s/23-01-11
// https://www.acmicpc.net/problem/2742

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const n = input

const nTo1 = function(n){
    let result = [];
    for(i = n; i > 0; i--){
        result.push(i);
    }
    console.log(result.join('\n'));
}

nTo1(n)

//3m30s