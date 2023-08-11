function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((i)=>{
    if(answer>n) return
        else answer+=i
    })
    return answer;
}