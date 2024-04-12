function solution(keyinput, board) {
    let place = [0,0]
    keyinput.forEach((item)=>{
        switch(item){
            case "left":
                if(place[0]>-((board[0]-1)/2))place[0]-=1
                break;
            case "right":
                 if(place[0]<((board[0]-1)/2))place[0]+=1
                break;
            case "up":
                 if(place[1]<((board[1]-1)/2))place[1]+=1
                break;
            case "down":
                if(place[1]>-((board[1]-1)/2))place[1]-=1
                break;
                
        }
    })
    return place
}