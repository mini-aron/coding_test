function solution(M, N) {
    const Max = M>N?M:N;
    const Min =  M>N?N:M;
    return (Min-1)+(Min*(Max-1));
}