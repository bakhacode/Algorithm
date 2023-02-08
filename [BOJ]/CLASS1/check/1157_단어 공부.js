// [BOJ]Bronze1/단어 공부/21m10s/23-02-08/런타임에러
// https://www.acmicpc.net/problem/1157

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().toLowerCase();

const array = input.split("");

const unique = [...new Set(input)];

const answer = [];

for (const a of unique) {
    answer.push(array.filter((el) => el == a));
}

const sorted = answer.sort((a, b) => a.length - b.length);

let result = "";
if (sorted[sorted.length - 1].length == sorted[sorted.length - 2].length) {
    result = "?";
} else {
    result = sorted[sorted.length - 1][0].toUpperCase();
}

console.log(result);

//21m10s 런타임에러 개빡침
//https://gurtn.tistory.com/49 포문 줄여서 푸는법 알파벳을 유니코드로 만들어서..
