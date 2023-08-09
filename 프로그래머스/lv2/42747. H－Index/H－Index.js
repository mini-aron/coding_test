function solution(citations) {
    var answer = 0;
    for(let i = citations.length; i>0;i--){
        let s = 0
        citations.forEach((e)=>{
          if(e>=i){
              s+=1;
          }  
        })
       if(i<=s)return i;
    }
    return 0;
}