function solution(my_string) {
    var answer = [
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,
    ];
    my_string.split('').forEach((i)=>{
        i.toUpperCase()===i 
        ? answer[i.charCodeAt()-65]+=1 
        :answer[i.charCodeAt()-71]+=1

        console.log(i)
    })
    return answer;
}