function solution(k, score) {
    const stack = [];
    const answer = []
    score.forEach((item)=>{
        stack.push(item);
        stack.sort((a,b)=>b-a)
        if(stack.length >k) stack.pop()
        answer.push(stack[stack.length-1])
    })
    return answer;
}