function solution(myString) {
    return myString.split("x").filter((i)=>i.length>0).sort();
}