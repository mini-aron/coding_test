function solution(n)
{
    let a = n;
    let count = 0;
    while(a>=1){
        if(a%2===0){
            a = a/2;
            continue;
        }
        a-=1;
        count+=1;
    }
    return count;
}