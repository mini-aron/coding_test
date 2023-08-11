function solution(arr, k) {
    var answer = arr.map((i)=>k%2==0? i+k : i*k)
    return answer;
}