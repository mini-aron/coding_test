function solution(arr) {
    var answer = [...arr];
    let arr1= [];
    let maxLength = 0
    maxLength = arr[0].length>arr.length?arr[0].length:arr.length
    
    answer.forEach((i)=>{
        while(i.length<maxLength){
            i.push(0);
        }
    })
    while(arr1.length<maxLength)
        arr1.push(0)
    while(answer.length<maxLength){
            answer.push(arr1);
        }
    return answer;
}