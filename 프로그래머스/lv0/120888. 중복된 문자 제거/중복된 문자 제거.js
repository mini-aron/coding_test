function solution(my_string) {
 return my_string.split("").filter((i,idx)=>my_string.split("").indexOf(i)===idx).join("")  
}