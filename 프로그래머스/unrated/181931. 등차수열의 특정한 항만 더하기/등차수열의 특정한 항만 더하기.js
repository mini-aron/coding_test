function solution(a, d, included) {
    var answer = 0;
    counter = a;
    for(let i = 0;i<included.length;i++){
        if(included[i]){
            answer += counter;
        }else{
            
        }
        counter += d;
    }
    console.log(answer);
    return answer;
}