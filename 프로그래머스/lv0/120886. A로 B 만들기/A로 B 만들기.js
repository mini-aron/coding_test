function solution(before, after) {
    const answer = [...before]
    after.split("").forEach((item)=>answer[answer.indexOf(item)]=0);
    return answer.filter((i)=>i!==0).length>0?0:1;
}