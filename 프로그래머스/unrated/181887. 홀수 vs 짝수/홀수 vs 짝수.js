function solution(num_list) {
    var answer = 0;
    let a = 0;
    let b = 0;
    num_list.forEach((i,idx)=>{
        idx%2==0?a+=i:b+=i
    })
    return a>b?a:b;
}