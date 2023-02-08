// [BOJ]Bronze2/문자열/8m37s/23-02-08
// https://www.acmicpc.net/problem/2675

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const array = input.map((el) => el.split(" "));
const T = array[0];
const answer = [];

for (let i = 1; i <= T; i++) {
    let str = "";
    for (let j = 0; j < array[i][1].length; j++) {
        str += array[i][1][j].repeat(array[i][0]);
    }
    answer.push(str);
}

console.log(answer.join("\n"));

//8m37s
