function solution(strArr) {
    var answer = 0;
    for(let i = 0;i<30;i++){
        const buffer = strArr.filter((item)=>item.length===i+1).length
        answer = answer<buffer?buffer:answer
    }
    return answer;
}