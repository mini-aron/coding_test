function solution(s) {
    return s.toLowerCase().split(" ").map(i=>{
        console.log(i[0],typeof i[0])
        if((typeof i[0] == "string")&&(isNaN(i[0]))){
            return i[0]?.toUpperCase()+i.slice(1)
        }else if (!isNaN(i[0])) return i
        return ""
    }).join(" ")
}