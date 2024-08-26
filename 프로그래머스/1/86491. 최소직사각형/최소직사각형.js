function solution(sizes) {
    var answer = [0,0];
    sizes.forEach((i)=>{
        let buffer = i.sort((a,b)=>b-a)
        console.log(buffer)
        if(buffer[0]>answer[0])answer[0]=buffer[0]
        if(buffer[1]>answer[1])answer[1]=buffer[1]
        })
    return answer[0]*answer[1];
}   