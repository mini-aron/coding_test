function solution(brown, yellow) {
    for(let i = 1 ; i <= yellow ; i++) {
        const yellowHeight = yellow / i;
        if(Number.isInteger(yellowHeight)){
            if((i * 2 + yellowHeight * 2 + 4) === brown) {
                return [yellowHeight+2, i+2]
            }
        }
    }
}