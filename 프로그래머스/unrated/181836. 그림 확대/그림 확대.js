function solution(picture, k) {
    var answer = [];
    picture.forEach((i)=>{
        let buffer = "";
        i.split("").forEach((i)=>{
            buffer+=i.repeat(k)
        })
        for(let j = 0;j<k;j++) answer.push(buffer)
    })
    return answer;
}