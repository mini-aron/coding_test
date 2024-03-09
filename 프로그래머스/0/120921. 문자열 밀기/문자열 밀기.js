function solution(A, B) {
   let point = B.split("")
   let str = A.split("")
   for(let i = 0;i<point.length;i++){
      if(str.toString() == point.toString()) return i
      str.unshift(str[str.length-1])
      str.pop()
   }
    return -1
}