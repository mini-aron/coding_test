function solution(my_string, m, c) {
    var answer = '';
    let i = c-1;
    while(i<my_string.length){
        answer+=my_string[i]
        i+=m;
    }
    return answer;
}