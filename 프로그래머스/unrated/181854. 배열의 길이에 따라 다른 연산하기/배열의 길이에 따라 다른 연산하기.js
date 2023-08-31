function solution(arr, n) {
    return arr.map((i,idx)=>arr.length%2===0?(idx%2===0?i:i+n):(idx%2===0?i+n:i))
}