function solution(numLog) {
    var answer = '';
    let buffer = [];
    for(let i = 1;i<numLog.length;i++){
        switch(numLog[i]-numLog[i-1]){
            case 1:
                buffer += "w";
                break;
            case -1:
                buffer += "s";
                break;
            case 10:
                buffer += "d";
                break;
            case -10:
                buffer += "a";
                break;
        }
    }
    answer =buffer;
    return answer;
}