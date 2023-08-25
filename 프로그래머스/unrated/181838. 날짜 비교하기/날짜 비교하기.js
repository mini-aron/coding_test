function solution(date1, date2) {
    let answer = 0;
    if(date1[0]<date2[0]||(date1[1]<date2[1]&&date1[0]===date2[0])||(date1[2]<date2[2]&&date1[1]===date2[1]))
        return 1;
    return 0;
}