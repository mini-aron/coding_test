function solution(left, right) {
    let answer = 0;
    for(let i = left;i<=right;i++){
        let buffer = 0;
        for(let j = i;j>0;j--){
            if(i%j==0) buffer +=1;
        }
        console.log(buffer)
        buffer%2==0?answer+=i:answer-=i
    }
    return answer;
}