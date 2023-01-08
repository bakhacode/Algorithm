// [조건]
// [BOJ]Bronze5/사파리월드/11m/23-01-08
// https://www.acmicpc.net/problem/2420

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let [n, m] = input

const named = function(n, m){
    let arr = [];
    if(Math.sign(n) === Math.sign(m)){
        let arr = [Math.abs(n),Math.abs(m)]
        arr.sort((a, b) => a - b);
        return arr[1] - arr[0];       
    } else {
        return Math.abs(n) + Math.abs(m)
    }
}

console.log(named(n, m));

//11분 테스트없이 한 번에 맞아서 기분이 굳