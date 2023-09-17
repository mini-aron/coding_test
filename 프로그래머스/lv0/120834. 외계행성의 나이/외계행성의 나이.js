function solution(age) {
    return String(age).split("").map((i)=>String.fromCharCode(Number(i)+97)).join("");
}