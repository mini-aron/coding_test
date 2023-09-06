function solution(price) {
    
    return Math.floor(price-(price*([10000,30000,50000,50000].filter((i)=>i<=price/10).length*0.05).toFixed(2)))
}