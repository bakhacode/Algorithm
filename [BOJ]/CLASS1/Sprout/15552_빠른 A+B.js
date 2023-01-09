// [빠른 입출력]
// [BOJ]Bronze4/빠른 A+B/6m32s/23-01-09
// https://www.acmicpc.net/problem/15552

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let array = input

const calc = function(array){
    let caseCount = array[0]
    let answer = [];
    for(i = 1; i <= caseCount; i++){
        let arr = array[i].split(' ').map(Number);
        answer.push(arr[0] + arr[1])
    }
    console.log(answer.join('\n'))
}
calc(array);


//풀이시간 6분32초 10950문제에서 미리 만들어놨던 문자열로 한 번에 뽑는 코드 사용
//찾다가 시간감 