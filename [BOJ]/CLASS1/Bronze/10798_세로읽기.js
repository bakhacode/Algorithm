// [BOJ]Bronze1/세로읽기/40m/23-01-24
// https://www.acmicpc.net/problem/10798

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const arrays = input;
const sorted = [...arrays].sort((a, b) => a.length - b.length); //원본을 살리기위해 스프레드 사용

const newArrays = [];

for (let i = 0; i < sorted[sorted.length - 1].length; i++) {
    for (let j = 0; j < arrays.length; j++) {
        if (arrays[j].length > i) newArrays.push(arrays[j][i]);
        else newArrays.push("");
    }
}

console.log(newArrays.join(""));

//40분
