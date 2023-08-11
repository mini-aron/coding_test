function solution(arr, query) {
    var answer = arr;
    query.forEach((i,idx)=>{
        idx%2==0? answer = answer.slice(0,i+1) :  answer = answer.slice(i)
        console.log(answer)
    })
    return answer;
}