function solution(hp) {
    return Math.floor(hp/5)+Math.floor(hp%5/3)+Math.floor(hp%5%3/1);
}