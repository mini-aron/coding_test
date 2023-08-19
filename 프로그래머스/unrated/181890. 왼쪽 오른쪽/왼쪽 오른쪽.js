function solution(str_list) {
    let idx=0;
    let a=null;
    if(!str_list.includes("l")&&!str_list.includes("r")) return [];
    str_list.some((i,id)=>{if(i==="l"||i==="r"){
        idx = id;
        i==="l"?a=0:a=1;
        return true;
    }})
    console.log(a,idx)
    console.log(a===0?str_list.slice(0,idx):str_list.slice(idx+1,str_list.length))
    return a===0?str_list.slice(0,idx):str_list.slice(idx+1,str_list.length);
}