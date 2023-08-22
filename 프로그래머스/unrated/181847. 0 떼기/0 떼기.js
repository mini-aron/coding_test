function solution(n_str) {
    var answer = '';
    let x = false;
    n_str.split("").map((i)=>{
        if(0<i) x = true
        x?answer+=i:null
    })
    return answer;
}