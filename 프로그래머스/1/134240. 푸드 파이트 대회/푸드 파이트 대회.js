function solution(food){
    temp = ''
    for(i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2)
        
        for(j=0; j<count; j++){
            temp += i.toString()
        }
    } return temp + "0" + [...temp].reverse().join('')
}