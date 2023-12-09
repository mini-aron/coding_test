function solution(arr, divisor) {
    let arra = arr.filter(item=>item%divisor==0).sort((a,b)=>a-b);
    return arra.length>0?arra:[-1]
}