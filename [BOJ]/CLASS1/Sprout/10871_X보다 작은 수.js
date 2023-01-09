// [배열]
// [BOJ]Bronze5/X보다 작은 수/5m/23-01-09
// https://www.acmicpc.net/problem/10871

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let [n, x] = input[0].split(' ').map(Number)

let a = input[1].split(' ').map(Number)

let checkA = function(n, x, a){
    let result = [];
    for(i = 0; i <= n - 1; i++){
        if(a[i] < x){
            result.push(a[i])
        }
    }
    console.log(result.join(' '));
}

checkA(n, x, a);

//map이랑 조건삼항 써보고싶었는데 아쉽 풀이시간 5분
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// let checkA = function(n, x, a){
//     let result = a.filter(number => number < x)
//     console.log(result.join(' '))
// }

// checkA(n, x, a);
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//map이 아닌 filter를 사용해야하는 거 였음 내가 map으로 원했던 로직