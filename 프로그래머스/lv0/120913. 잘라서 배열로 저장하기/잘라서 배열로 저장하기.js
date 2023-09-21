function solution(my_str, n) {
    return [...my_str].map((i,idx)=>(idx+1)%n===0&&idx+1!==my_str.length?i+" ":i).join("").split(" ");
}