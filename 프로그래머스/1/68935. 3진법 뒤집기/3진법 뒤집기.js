
function chageTrit(n) {
    let arr = [n]
   while (1){
       if(Math.floor(arr[arr.length-1]/3)===0){
           return arr
    }
       arr.push(Math.floor(arr[arr.length-1] / 3) )
       arr[arr.length-2] = Math.floor(arr[arr.length-2] % 3)
       
   }
}

function change10jinbuf(n){
    let number = 0
    let buffer = n
        return buffer.reverse().reduce((a,b,index)=>(
            a+(b*Math.pow(3,index))
        
    ),number)
}

function solution(n) {
   return change10jinbuf(chageTrit(n))
}
