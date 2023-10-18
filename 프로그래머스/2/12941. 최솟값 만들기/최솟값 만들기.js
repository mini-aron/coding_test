function solution(A,B){
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    return A.map((i,idx) => i*B[idx]).reduce((a,b)=>a+b,0);
}