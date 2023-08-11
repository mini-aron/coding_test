function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length==arr2.length){
        let sum1 = 0;
        let sum2 = 0;
        arr1.forEach((i)=>sum1+=i)
        arr2.forEach((i)=>sum2+=i)
        answer = sum1==sum2?0:sum1>sum2?1:-1
    }
    else 
        answer = arr1.length > arr2.length ? 1 : -1
    return answer;
}