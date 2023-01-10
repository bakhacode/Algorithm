// [문자열]
// [BOJ]Bronze5/알파벳 찾기/16m40s/23-01-11
// https://www.acmicpc.net/problem/10809

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const s = input.split('')

let abc = {
    'a' : '-1',
    'b' : '-1',
    'c' : '-1',
    'd' : '-1',
    'e' : '-1',
    'f' : '-1',
    'g' : '-1',
    'h' : '-1',
    'i' : '-1',
    'j' : '-1',
    'k' : '-1',
    'l' : '-1',
    'm' : '-1',
    'n' : '-1',
    'o' : '-1',
    'p' : '-1',
    'q' : '-1',
    'r' : '-1',
    's' : '-1',
    't' : '-1',
    'u' : '-1',
    'v' : '-1',
    'w' : '-1',
    'x' : '-1',
    'y' : '-1',
    'z' : '-1',
}

const findABC = function(word){

    for(i = 0; i < s.length; i++){
        if(s[i] in abc ){
            if(abc[s[i]] === '-1'){
                abc[s[i]] = i
            }
        }
    }

    const result = (Object.values(abc)).join(' ')

    return result
}

console.log(findABC(s));



//16m40s 처음으로 객체 키 값 활용해서 문제 풀어봄 이게되네? 싶은게 많아서 신기하고 재밌 ㅋㅋ

//찾아보니 배열내에서 첫번째로 일치하는 인덱스'만' 반환하고 값이 없을 시에는 -1을 반환하는 indexOf
//메서드를 사용하는 문제였다 ㅋㅋㅋㅋ; 아래풀이처럼 알파벳은 아스키코드를 이용해서 a-z까지 순환하며
//indexOf를통해 반환되는 값들을 전부 배열에 넣은 후 마지막에 join으로 합쳐줬다 나름 창의적으로
//풀었다고 생각해야겠다 ㅋㅋ

// const input = require("fs").readFileSync("/dev/stdin").toString();

// const result = [];

// for (let i = 97; i <= 122; i++) {
//   result.push(input.indexOf(String.fromCharCode(i)));
// }

// console.log(result.join(" "));