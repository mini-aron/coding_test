function solution(s){
    let pCount = s.toLowerCase().split("").filter((i)=>i==="p").length
    let yCount = s.toLowerCase().split("").filter((i)=>i==="y").length
    return pCount === yCount
}