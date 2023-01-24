// [BOJ]Lv.1/음양 더하기/2m/23-01-24
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            answer += absolutes[i]
        } else {
            answer += -(absolutes[i])
        }
    }
    return answer;
}

//풀이 2분