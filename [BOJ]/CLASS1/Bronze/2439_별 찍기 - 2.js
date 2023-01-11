// [BOJ]Bronze4/별 찍기 - 2/17m56s/23-01-11
// https://www.acmicpc.net/problem/2439

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const n = input;

const printStar = function(n){
    let result = []
    for(i = 1; i <= n; i++){
        let str = ''
        for(j = 0; j < n; j++){
            if(j < n - i) str += ' '
            else str += '*'
        }
        result.push(str);
    }
    result.forEach((v) => console.log(v));
}

printStar(n);

//17m56s