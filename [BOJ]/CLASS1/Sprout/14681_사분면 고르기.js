// [조건]
// [BOJ]Bronze5/사분면 고르기/12m33s/23-01-08
// https://www.acmicpc.net/problem/14681

// fs.readFileSync인수를 0으로 받아야 맞춰짐;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let [x, y] = input

let getQuad = function(x, y){
    switch(true){
        case Math.sign(x) === 1 && Math.sign(y) === 1 : return "1"
            break;
        case Math.sign(x) === -1 && Math.sign(y) === 1 : return "2"
            break;
        case Math.sign(x) === -1 && Math.sign(y) === -1 : return "3"
            break;
        case Math.sign(x) === 1 && Math.sign(y) === -1 : return "4"
            break;
    }
}

console.log(getQuad(x, y));

//풀이시간 12m33s