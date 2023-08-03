function solution(number) {
    var answer = 0;
    Array.from(String(number)).map(i => answer += Number(i));
    return answer % 9
}