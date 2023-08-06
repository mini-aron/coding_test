function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((i)=>{
        if(k<i.substr(s,l)) answer.push(Number(i.substr(s,l)))
    })
    return answer;
}