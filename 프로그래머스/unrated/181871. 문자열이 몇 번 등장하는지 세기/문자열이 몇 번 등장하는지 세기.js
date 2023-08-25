function solution(myString, pat) {
    var answer = 0;
    myString.split("").forEach((i,idx)=>{
        if(pat===myString.slice(idx,idx+pat.length))
            answer++;
    })
    return answer;
}