// [반복]
// [BOJ]Bronze5/구구단/4m43s/23-01-09
// https://www.acmicpc.net/problem/2739

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

const n = Number(input)

const gugu = function(n){
    for(i = 1; i <= 9; i++){
        console.log(n + ' ' + '*' + ' ' + i + ' ' + '=' + ' ' + (n * i))
    }
}

gugu(n)

//풀이시간 4분43초