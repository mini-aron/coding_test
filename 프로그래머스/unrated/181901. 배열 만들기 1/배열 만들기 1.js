function solution(n, k) {
    var answer = [];
    for(let i = n;i>=1;i--){
        if(i%k==0){
            answer.push(i)
        }
    }
    return answer.sort((a,b)=> a-b);
}