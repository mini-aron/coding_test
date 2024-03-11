function solution(arr)
{   
    let stack = []
    arr.forEach((item,idx)=>{
        stack.push(item)
        if(idx!==0&&stack[stack.length-2]===item){
            stack.pop()
        }
    })
    return stack;
}