// [반복]
// [BOJ]Bronze5/A+B - 4/26s/23-01-09
// https://www.acmicpc.net/problem/10951

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let array = input

const calc = function(array){
    for(i = 0; i < array.length; i++){
        let arr = array[i].split(' ').map(Number);
        console.log(arr[0] + arr[1])
        }
    }
calc(array);

//풀이시간 26초 이전문제랑 똑같음 복붙이라 의미없음