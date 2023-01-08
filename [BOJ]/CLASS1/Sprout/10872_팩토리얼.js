// [반복]
// [BOJ]Bronze5/팩토리얼/20m/23-01-08
// https://www.acmicpc.net/problem/10872

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

let n = Number(input);

function factorial(n) {
    if (n < 2) return 1;
    return factorial(n - 1) * n;
  }

console.log(factorial(n))


// const factorial = function(n){
//     let result = 1;
//     for (let i = 1; i <= n * 1; i++) result *= i;
//     }
// }

//위식처럼 하려다가 두 가지 조건을 짬뽕해버려서인지 망한듯 18분 동안 삽질하고 
//for문으로 하려면 0일 조건도 생각해서 조건식에 n * 1을 해줘야하는듯 
//아무리봐도 재귀함수 사용하는게 베스트인듯

// const factorial = function(n){
//     if(n === 0) return 1
//     else{
//         let result = 1
//         for(i = 1; i < n; i++){
//             result *= i - 1
//         }
// }
// }