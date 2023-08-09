function solution(my_string, indices) {
    var answer = '';
    let i = 0;
    for(let j = 0; j<my_string.length;j++){
        if(indices.sort((a,b)=>a-b)[i]===j){
            i++;
        }
        else{answer+=my_string[j]}
    }
    
    return answer;
}