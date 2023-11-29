function solution(num,count = 0) {
    if (count >= 500) return -1
    if ( num === 1 )return count
    let nuum = num%2===0?num/2:num*3+1
   return solution(nuum,count+1)
}