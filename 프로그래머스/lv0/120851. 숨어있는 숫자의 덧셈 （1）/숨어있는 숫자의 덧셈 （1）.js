function solution(my_string){
return my_string.split("").filter((i)=>!isNaN(i)).map(i=>Number(i)).reduce((a,b)=>a+b)
}