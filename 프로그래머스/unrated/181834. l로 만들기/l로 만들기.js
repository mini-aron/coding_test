function solution(myString) {
    return myString.split("").map((i,idx)=>i.charCodeAt()<"l".charCodeAt()?"l":i).join("");
}