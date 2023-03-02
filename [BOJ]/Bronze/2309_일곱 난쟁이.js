// [BOJ]Bronze1/일곱 난쟁이/FAIL/23-03-03
// https://www.acmicpc.net/problem/2309

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

//내림차순으로 정렬 후 가장 큰 숫자부터 기준으로 넣어놓고 작은 숫자들을 바꿔가며 100이 되는 경우를 확인한다
//기준은 100이 넘을 때 이전 숫자를 하나씩 빼고
//아니다 1의 자리 숫자끼리 더했을 때 0이 되는 숫자들만 추린 후에 그 안에서 조합

let num = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] % 10 === 0) {
        num.push(input[i]);
    } else {
        for (let j = 0; j < input.length; j++) {
            if (j !== i) {
                if ((input[i] % 10) + (input[j] % 10) === 10) {
                    num.push(input[i]);
                    num.push(input[j]);
                    break;
                }
            }
        }
    }
}

const result = [...new Set(num)].sort((a, b) => b - a);

console.log(result);

//30분 컷 실패 아 젠장 문제 자체르 ㄹ잘몰이해했다 7명이여야하는데 실수..
//문제를 풀어내는 방법자체를 떠올리지 못했다 어차피 9명 중 2명을 걸러내기 떄문에
//총합 - 나머지 두 명 = 100 이 되면 그 두 명만 제거하면 되는 문제였다

const Total = input.reduce((r, v) => {
    return r + v;
}, 0);
let answer = "";
for (let i = 0; i < 9; i++) {
    if (answer.length > 0) break;
    for (let j = i + 1; j < 9; j++) {
        if (Total - input[i] - input[j] == 100) {
            const truth = input.filter((_, k) => k != i && k != j).sort((a, b) => a - b);
            answer = truth.join("\n");
            console.log(answer);
            break;
        }
    }
}

//https://lhoiktiv.tistory.com/417 풀이 출처
