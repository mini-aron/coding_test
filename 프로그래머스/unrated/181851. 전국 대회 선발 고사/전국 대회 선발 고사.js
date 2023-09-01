function solution(rank, attendance) {
    let answer = [];
    for(let i = 0;i<rank.length+1;i++)
        if(answer.length!==3&&attendance[rank.indexOf(i)])
            answer.push(rank.indexOf(i))
    return answer[0]*10000+100*answer[1]+answer[2]
    
}