function solution(arr) {
    var answer = [...arr];
    let i;
    for(i = 1;i<arr.length;){
        i*=2;
    }
    while(answer.length!==i){
        answer.push(0)
    }
    return answer;
}