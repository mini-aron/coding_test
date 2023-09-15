function solution(cipher, code) {
 return cipher.split("").filter((_,idx)=>(idx+1)%code===0).join("")
}