// [반복]
// [BOJ]Bronze5/A+B - 3/2m/23-01-09
// https://www.acmicpc.net/problem/10950

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let array = input

const calc = function(array){
    let caseCount = array[0]
    for(i = 1; i <= caseCount; i++){
        let arr = array[i].split(' ').map(Number);
        console.log(arr[0] + arr[1])
    }
}
calc(array);

//배열의 인덱스를 활용하는 반복문을 사용해놓고 첫 줄에 주어지는 테스트케이스 값을 임의적으로 버리고 시작했다가
//1시간을 날림 사실 프로그래머스 기준이면 문제풀이 코드작성까지 시간은 2분도 안 걸렸을텐데 다른 문제로
//1시간을 쓴거라 암튼 2분임.. 아오 열받아 