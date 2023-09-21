function solution(s) {
     const arr= s.split(" ").map((i)=>Number(i));
    return arr.reduce((a,b,i)=>{
        return isNaN(b)?a-arr[i-1]:a+b
    },0)
}