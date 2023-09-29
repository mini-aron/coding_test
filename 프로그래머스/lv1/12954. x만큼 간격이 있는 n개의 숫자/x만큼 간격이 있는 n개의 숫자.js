function solution(x, n) {
    return new Array(n).fill(0).map((_,idx)=>x+x*(idx));
}