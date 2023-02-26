// [BOJ]Bronze2/피보나치 수 5/FAIL/23-02-26
// https://www.acmicpc.net/problem/10870

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).map(Number).toS햣 tring().trim();

const n = input;

function solution(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return solution(n - 1) + solution(n - 2);
}

console.log(solution(n));

//재귀 사용인건 알았으나 재귀사용이 익숙치않아서 15분 생각해보고 답봤다
//https://tesseractjh.tistory.com/5
