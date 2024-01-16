function solution(s,idx=[0,0]) {
    if(s==="1")return idx;
    return solution(s.split("").filter((i)=>i!=="0").length.toString(2),[idx[0]+1,idx[1]+s.split("").filter((i)=>i=="0").length])
}