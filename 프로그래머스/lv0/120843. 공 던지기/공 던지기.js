function solution(numbers, k) {
    let s = 0;
    for(let i = 0;i<k-1;i++){
        s=(s+2>=numbers.length)?(s+2)-numbers.length:s+2;
        console.log(s)
    }
    return numbers[s];
}