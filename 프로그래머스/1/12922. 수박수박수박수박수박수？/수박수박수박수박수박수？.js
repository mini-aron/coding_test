function solution(n) {
    let arr = new Array(Math.floor(n/2));
     arr.fill("수박")
    if(n%2==1) arr.push("수")
    return arr.join("");
}