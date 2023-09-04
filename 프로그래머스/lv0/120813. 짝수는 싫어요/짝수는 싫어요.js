function solution(n) {
    return new Array(n).fill(0).map((_,idx)=>idx+1).filter((i)=>i%2!==0)
}