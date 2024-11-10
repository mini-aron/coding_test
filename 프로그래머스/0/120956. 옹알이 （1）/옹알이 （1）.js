function solution(babbling) {
    let answer = babbling
    const words = ["aya", "ye", "woo", "ma"];
    for(const word of words){
        answer = answer.map(i=>i.replace(word,"_"))
    }
    return answer.filter(i=>i.replace(/_/g,"").length==0).length;
}