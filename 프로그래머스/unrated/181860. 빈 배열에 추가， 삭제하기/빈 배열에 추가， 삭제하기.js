function solution(arr, flag) {
    var answer = [];
    flag.forEach((i,idx)=>{
    if(i){
        for(let j = 0;j<(arr[idx]*2);j++){
            answer.push(arr[idx])
        }
    } else{
        for(let j =0;j<arr[idx];j++){
            answer.pop();
        }
    }
    })
    return answer;
}