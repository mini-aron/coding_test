function solution(s) {
    return s.split(" ").map(i=>{
    return i.split("").map((j,idx)=> idx%2===0?j.toUpperCase():j.toLowerCase()).join("")
    }).join(" ");
}