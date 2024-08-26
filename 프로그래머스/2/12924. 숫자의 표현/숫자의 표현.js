

function addNumber(startNumber,finalNumber) {
    let number = finalNumber;
    let count =0;
    while(number>=0){
        if(number===0)
            return 1       
        number -= startNumber+count
        count +=1
    }
    return 0
}

function solution(n) {
    let answer = 0
    for(let i = n;i>=1;i--){
       answer+= addNumber(i,n)
    }
    return answer
}
