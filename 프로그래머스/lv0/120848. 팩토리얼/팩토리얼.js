function solution(n) {
    const pack=(lim,number,count)=>{
        const num = number*count
        if(num>lim) return count-1
        return pack(lim,num,count+1)
    }
    return pack(n,1,1)
}
