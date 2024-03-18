function solution(n, count = n) {
  count+=1;
  if(n.toString(2).replace(/0/g,"")===count.toString(2).replace(/0/g,"")) return count
   return solution(n,count)
}