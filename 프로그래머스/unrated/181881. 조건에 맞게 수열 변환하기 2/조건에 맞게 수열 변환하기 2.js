function solution(arr) {
    let x = 0;
    var prev = [...arr];
    while(1){
        const next = prev.map((item,idx)=>{
            if(50<=item&&item%2===0){
               return  item/2
            }
            else if(50>item&&item%2!==0){
                return item*2+1
            }     
            return item;
        })
         const isEqual = prev.every((item, idx) => item === next[idx]);
        console.log(next,prev)
        if(isEqual){
            return x;
        }
        x++;
        prev = [...next];
    }
    }