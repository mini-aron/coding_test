function solution(num_list) {
    var answer = 0;
    let danwiE = 1, danwiO = 1;
    let even = 0;
    let odd = 0;
    for(let i = num_list.length - 1;i>=0;i--){
        if (num_list[i] % 2 == 0) {
                even += danwiE * num_list[i];
                danwiE *= 10;
            } else {
                odd += danwiO * num_list[i];
                danwiO *= 10;
            }
    }
    answer = even+odd;
    return answer;
}