function solution(order) {
    return String(order).split("").map(i=>Number(i)).filter(i=>i%3===0&&i!==0).length
}