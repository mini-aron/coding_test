function solution(num_list) {
    var answer = 0;
    num_list.forEach((i)=>{
        let j = i;
        while(j>1){
            j =  j%2===0?j/2:(j-1)/2
            answer++;
        }
    })
    return answer;
}