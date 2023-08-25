function solution(n) {
    let answer = []
    for(let i = 0;i<n;i++){
        const buffer = [];
        for(let j = 0;j<n;j++){
            j===i ? buffer.push(1):buffer.push(0)    }
        answer.push(buffer)
}
    return answer;
}