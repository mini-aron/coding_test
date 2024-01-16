function solution(price, money, count) {
    var answer = money;
    for(let i = count*price;i>=price;i--){
        if(i%price==0)answer -= i;
    }

    return answer<0?answer*-1:0;
}