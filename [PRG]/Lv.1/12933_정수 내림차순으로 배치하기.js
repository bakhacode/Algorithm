// [PRG]Lv.1/정수 내침사운으로 배치하기/2m56s/23-01-10
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    let result = n.toString().split('').sort((a, b) => b - a).join('')
    answer = Number(result)
    return answer;
}

//풀이시간 2m56s