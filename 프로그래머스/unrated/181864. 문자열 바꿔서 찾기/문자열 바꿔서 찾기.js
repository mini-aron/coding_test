function solution(myString, pat) {
    var answer = 0;
    
    return myString.split("").map((i)=>i==="A"? "B" : "A").join("").includes(pat)?1:0;
}