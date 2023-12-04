function solution(phone_number) {
    return phone_number.slice(0,-4).split("").fill("*").join("")+phone_number.slice(-4)
}