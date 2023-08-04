function solution(l, r) {
    var answer = [];
    for(let i = l;i<=r;i++){
        if(i.toString().replace(/[05]/g,'').length==0&&i!==0) answer.push(i)
    }
    return answer.length==0?[-1]:answer;
}