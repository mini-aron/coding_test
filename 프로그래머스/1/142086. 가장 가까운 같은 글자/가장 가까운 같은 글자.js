function solution(s) {
    const answer = [-1]
    for(let i = 1; i < s.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(s[i] === s[j]) {
                answer.push(i - j)
                break
            }
            if(j === 0) {
                answer.push(-1)
            }
        }
    }
    return answer
}