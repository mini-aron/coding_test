function solution(id_pw, db) {
    let arr = db.filter(i=>i[0]==id_pw[0]).flat()
   return arr.length>0?(arr[1]===id_pw[1]?"login":"wrong pw"):"fail"
}