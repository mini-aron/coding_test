function solution(n) {
    var answer = n ** (1/2)
    if(answer%1 != 0) return -1
    return (answer+1)**2;
}