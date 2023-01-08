// [반복]
// [BOJ]Bronze5/N 찍기/1m/23-01-08
// https://www.acmicpc.net/problem/2741

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

let n = Number(input);

const drawN = function(n){
    let str = ''
    for(i = 1; i <= n; i++){
        str += i + '\n';
    }
    return str;
}

console.log(drawN(n))

//금방 풀었는데 백준 시간초과 해결하느라 코드수정