// [PRG]Lv.1/숫자 문자열과 영단어/FAIL/23-01-15
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    var answer;
    const matchTable = {
        '0' : 'zero',
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
    }
    const abc = Object.values(matchTable);
    
    function getKey(obj, value){
        return Object.keys(obj).find(key => obj[key] === value);
    }
    
    for(i = 0; i < abc.length; i++){
        let changeNum = Number(getKey(matchTable,abc[i]))
        let deletedABC = s.split(abc[i])
        s = deletedABC.join(changeNum);
    }
    answer = s;
    return Number(answer);
}

//1시간 실패이후 객체활용하는 방법으로 조금 바꿈 