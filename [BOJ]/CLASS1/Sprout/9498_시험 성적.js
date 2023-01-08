// [조건]
// [BOJ]Bronze5/시험 성적/10m/23-01-08
// https://www.acmicpc.net/problem/9498

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map(Number);

let score = input

let getGrade = function(score){
    switch(true){
    case 90 <= score && score <= 100 : return 'A' 
    case 80 <= score && score <= 89 : return 'B'
    case 70 <= score && score <= 79 : return 'C'
    case 60 <= score && score <= 69 : return 'D'
    default : return 'F'
    }
}

console.log(getGrade(score));

//switch문 범위를 조건으로 설정하는 방법을 몰라서 찾아보느라 10분걸림
//제출은 if else로 먼저 해결 후 진짜 switch는 범위가 안되나 다시 찾아봤음

// const fs = require("fs");
// const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().split(' ').map(Number);

// let score = input

// let getGrade = function(score){
//     if(90 <= score && score <= 100) return 'A'
//     else if(80 <= score && score <= 89) return 'B'
//     else if(70 <= score && score <= 79) return 'C'
//     else if(60 <= score && score <= 69) return 'D'
//     else return 'F'
// }

// console.log(getGrade(score));