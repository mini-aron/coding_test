function solution(num_list, n) {
    var answer = [];
   answer  = answer.concat(num_list.slice(n),num_list.slice(0,n))

    return answer;
}