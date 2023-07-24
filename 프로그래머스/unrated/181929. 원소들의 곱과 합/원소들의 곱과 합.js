function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let prod = 1;
    
    for(let i = 0;i<num_list.length;i++){
        sum+=num_list[i];
        prod *= num_list[i];
    }
    sum *= sum;
    console.log(sum,prod)
    answer = Number(prod<sum);
    return answer;
}