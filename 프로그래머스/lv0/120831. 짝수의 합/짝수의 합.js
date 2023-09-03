function solution(n) {
    
    return new Array(n).fill(0).map((i,idx)=>idx+1).reduce((a,b)=>b%2===0?a+b:a+0,0);
}