function solution(numbers) {
    const result = [];
    for(let i = 0; i < numbers.length;i++){
        for(let j = i+1;j<numbers.length;j++){
            if(result.filter((number)=> number===(numbers[i]+numbers[j])).length===1){
            }
            else result.push(numbers[i]+numbers[j])
        }
    }
    return result.sort((a,b)=> a-b)
}