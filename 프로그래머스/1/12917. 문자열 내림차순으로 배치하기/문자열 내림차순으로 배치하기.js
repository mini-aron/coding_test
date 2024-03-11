function solution(s) {
    return String.fromCharCode(...s.split("").map(i=>i.charCodeAt()).sort((a,b)=>b-a))
}