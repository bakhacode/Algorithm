// [반복]
// [BOJ]Bronze5/A+B - 5/2m39s/23-01-09
// https://www.acmicpc.net/problem/10952

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let array = input

const calc = function(array){
    for(i = 0; i < array.length - 1; i++){
        let arr = array[i].split(' ').map(Number);
        console.log(arr[0] + arr[1])
        }
    }
calc(array);