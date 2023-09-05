function solution(n) {
    return String(n).split("").map(i=>Number(i)).reduce((a,b)=>a+b,0)
}