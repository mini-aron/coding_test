function solution(numbers) {
    let answer = numbers.sort((a,b)=>a-b)
    return answer[0]*answer[1]>answer[answer.length-2]*answer[answer.length-1]
    ?answer[0]*answer[1]:answer[answer.length-2]*answer[answer.length-1]
}