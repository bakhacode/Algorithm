// [문자열]
// [BOJ]Bronze5/학점계산/5m46s/23-01-11
// https://www.acmicpc.net/problem/2754

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const score = input

const getGrade = function(score){
    let scoreTable = {
        'A+': '4.3',
        'A0': '4.0',
        'A-': '3.7',
        'B+': '3.3',
        'B0': '3.0',
        'B-': '2.7',
        'C+': '2.3',
        'C0': '2.0',
        'C-': '1.7',
        'D+': '1.3',
        'D0': '1.0',
        'D-': '0.7',
        'F': '0.0'
    }
    const grade = scoreTable[score];

    return grade;
}

console.log(getGrade(score));

//5m46s 객체 접근 처음이라 찾아보느라 + 따옴표 붙이느라 시간 다감 ㅋㅋ

