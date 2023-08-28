function solution(arr) {
    var answer = [];
    let i = 0;
    while(i<arr.length){
    if(answer===[]) answer.push(arr[i])
    else if(answer[answer.length-1]===arr[i]) answer.pop();
    else if(answer[answer.length-1]!==arr[i]) answer.push(arr[i])
    i++
    } 
   
    return answer.length==0?[-1]:answer;
}