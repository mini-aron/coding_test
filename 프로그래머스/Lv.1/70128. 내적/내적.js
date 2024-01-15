function solution(a, b) {
   return a.reduce((num,cur,idx)=>num+(cur*b[idx]),0)
}