function solution(sides) {
   console.log(sides.sort((a,b)=>a-b),)
    return sides.sort((a,b)=>a-b).reduce((a,b,idx)=>idx===2?a-b:a+b,0)>0?1:2
}