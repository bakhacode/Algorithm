// [반복]
// [BOJ]Bronze5/별 찍기 - 1/2m41s/23-01-09
// https://www.acmicpc.net/problem/2438

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

let n = Number(input)

const printStar = function(n){
    const str = '*'
    for(i = 1; i <= n; i++){
        console.log(str.repeat(i));
    }
}

printStar(n);

//풀이시간 2분41초