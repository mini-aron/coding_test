function solution(n) {
    let x = n;
    let answer = [x];
    while(x!==1){
        x%2==0 ? x/=2 : x = x*3+1
        answer.push(x)
    }
    return answer;
}