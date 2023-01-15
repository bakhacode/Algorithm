// [PRG]Lv.1/최소직사각형/FAIL/23-01-15
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}

//풀이참조
//https://velog.io/@sisofiy626/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B5%9C%EC%86%8C%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95-JavaScript