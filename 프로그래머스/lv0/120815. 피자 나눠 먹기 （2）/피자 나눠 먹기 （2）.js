function func(n,re){
    return (re*6)%n===0 ? re : func(n,re+1)
}
const solution= (n)=>func(n,1);
