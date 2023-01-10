// [문자열]
// [BOJ]Bronze5/대소문자 바꾸기/15m/23-01-11
// https://www.acmicpc.net/problem/2744

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const n = input.split('')

const reverseCase = function(array){
    
    let result = [];

    for(i =0; i < n.length; i++){
        if(n[i].match(new RegExp(/^[A-Z]/))){
            result.push(n[i].toLowerCase());
        } else if(n[i].match(new RegExp(/^[a-z]/))){
            result.push(n[i].toUpperCase());
        }
    }
    return result.join('');
}


console.log(reverseCase(n));

//15분 정규표현식 안쓰고 하려다가 시간 걸려서 찾느라 시간 다 감 ㅡㅡ;