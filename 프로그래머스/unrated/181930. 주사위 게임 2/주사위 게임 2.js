function solution(a, b, c) {
    var answer = 0;
    answer = a + b + c;
    if(a==b||a==c||b==c){
        answer *= (a**2 + b**2 + c**2);
    }
    if(a==b&&b==c){
        answer *= (a**3 + b**3 + c**3);
    }
    console.log(answer);
    return answer;
}