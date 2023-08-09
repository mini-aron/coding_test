function solution(arr, idx) {
    answer = 100000;
    arr.forEach((i,idnx)=>{
        if(i===1&&idnx>=idx&&answer>idnx)
            answer = idnx
    })
    answer === 100000 ? answer = -1:null
    return answer;
}