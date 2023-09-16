function solution(rsp) {
   return rsp.split("").map((i)=>[5,0,2][Math.floor(Number(i)/2)]).join("")
}