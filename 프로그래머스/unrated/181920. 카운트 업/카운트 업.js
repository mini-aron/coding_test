function solution(start, end) {
    var answer = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return answer;
}