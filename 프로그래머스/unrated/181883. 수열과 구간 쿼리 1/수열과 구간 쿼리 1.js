function solution(arr, queries) {
    let answer = arr
    queries.forEach((j,jdx)=>{
        const [s,e] = j;
        answer = answer.map((i,idx)=>s <= idx&&idx <= e?i+1:i)
    });
    
    return answer ;
}