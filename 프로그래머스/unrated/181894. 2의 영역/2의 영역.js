function solution(arr) {
    var answer = [];
    arr.indexOf(2)===-1?answer.push(-1): answer = arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1)
    return answer;
}