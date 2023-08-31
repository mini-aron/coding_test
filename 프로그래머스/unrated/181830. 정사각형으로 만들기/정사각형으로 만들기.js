function solution(arr) {
    var answer = [...arr];
    let arr1= [];
    let maxLength = 0;
    for (const subArray of arr) {
  if (subArray.length > maxLength) {
    maxLength = subArray.length;
  }
 }
    maxLength = maxLength>arr.length?maxLength:arr.length
    
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