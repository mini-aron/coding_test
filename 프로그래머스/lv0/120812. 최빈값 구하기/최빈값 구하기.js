function solution(array) {
  let arr = [...new Set(array)];
  let arr2 = arr.map((i)=>array.filter((j)=>i===j).length)
 
  return arr[arr2.indexOf(Math.max(...arr2))]!==arr[arr2.lastIndexOf(Math.max(...arr2))]?-1:arr[arr2.indexOf(Math.max(...arr2))]
}