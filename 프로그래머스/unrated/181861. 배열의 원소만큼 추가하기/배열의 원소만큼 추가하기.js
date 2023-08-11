function solution(arr) {
    var answer = [];
    arr.forEach((i)=>{
        for(let j = 0;j<i;j++){
            answer.push(i)
        }
    })
    return answer;
}