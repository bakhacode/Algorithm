// [조건]
// [BOJ]Bronze5/윤년/15m/23-01-08
// https://www.acmicpc.net/problem/2753

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

let year = Number(input);

const checkLeapYear = function(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 1
    else return 0
}

console.log(checkLeapYear(year));

// const checkLeapYear = function(year){
//     if(year % 4 === 0){
//         if(year % 100 !== 0){
//             return 1
//         } else if(year % 400 === 0){
//             return 1
//         } else return 0
//     } else return 0
// 

//풀이시간 15분 문제를 이상하게 이해해서 헛고생; 
//윤년은 연도가 "4의 배수이면서, 100의 배수가 아닐 때" [또는] "400의 배수일 때"이다.
//이렇게 나눠서 봤어야했는데 정신이 나갔던듯
