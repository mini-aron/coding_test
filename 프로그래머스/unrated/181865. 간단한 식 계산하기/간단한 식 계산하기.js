function solution(binomial) {
    let bino = binomial.split(" ").map((i,idx)=>idx==1?i:Number(i));
    if(bino[1]==='+') return bino[0]+bino[2]
    else if(bino[1]==='-') return bino[0]-bino[2]
    else return bino[0]*bino[2]
}