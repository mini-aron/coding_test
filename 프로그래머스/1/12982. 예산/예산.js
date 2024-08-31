function solution(d, budget) {
    let i = 0;
    let total = 0
      d.sort((a,b)=>a-b).forEach((item)=>{
        if(total+item<=budget) {
        total+=item
        i++
        }
      })
    return i
}