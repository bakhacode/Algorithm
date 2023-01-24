// [PRG]Lv.1/나머지가 1이 되는 수 찾기/5m30s/23-01-24
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    var answer = 0
    for(let i = 1; i < n ; i++){
        if(n % i === 1){
            answer = i
            return answer;
        }
    }
}

//5m30s