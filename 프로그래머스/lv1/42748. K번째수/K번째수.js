function solution(array, commands) {

    const answer = commands.map(([i,j,k])=>array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
    return answer
}