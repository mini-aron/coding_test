function solution(n) {
    
    return Number([...n.toString()].map(i=>Number(i)).sort((a,b)=>b-a).join(""));
}