function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((i)=>{
        i.includes(ex)?null:answer+=i
    })
    return answer;
}