function solution(num_str) {
    var answer = 0;
    num_str.split('').forEach(i=>answer+=Number(i))
    return answer;
}