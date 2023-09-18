function solution(num, k) {
    return String(num).split("").map(i=>Number(i)).indexOf(k)+
        (String(num).split("").map(i=>Number(i)).indexOf(k)<0?0:1);
}