function solution(n) {
    // 정답을 담을 배열 선언
    let answer = [];
    // 소인수 분해, 약수 2부터 시작
    let i = 2;
    
    while (n != 1) {
        // 나눠 떨어지면 해당 수는 약수
        if (n % i == 0) {
            answer.push(i)
            // 해당 약수로 나눠 떨어질 때까지 반복
            while (n % i == 0) {
                n = n / i; 
            }
        }
        i ++;
    }
    return answer;
}