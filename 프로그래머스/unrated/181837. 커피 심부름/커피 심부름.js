function solution(order) {
    var answer = 0;
    order.forEach((i)=>{
        if(i.includes("cafelatte")) answer+=5000;
        else if(i.includes("americano")) answer+=4500;
        else answer += 4500;
    })
    return answer;
}