function solution(my_strings, parts) {
    var answer = '';
    parts.forEach((i,idx)=>{answer += my_strings[idx].slice(i[0],i[1]+1)})
    return answer;
}