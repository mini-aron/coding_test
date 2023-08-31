function solution(arr, k) {
    let answer = [];
    arr.forEach((i)=>{if(!answer.includes(i)&&answer.length<k)answer.push(i)})
    while(answer.length<k){
        answer.push(-1)
    }
    return answer;
}