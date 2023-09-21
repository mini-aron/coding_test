function solution(n){
    return [...n.toString()].map(i=>Number(i)).reduce((a,b)=>a+b,0)
}