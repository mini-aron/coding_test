function solution(s) {
    let arr = s.split(' ').map(i=>Number(i));
    return [Math.min(...arr),Math.max(...arr)].join(' ')
}