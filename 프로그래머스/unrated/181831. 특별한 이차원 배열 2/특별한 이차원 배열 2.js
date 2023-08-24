function solution(arr) {
    let answer = 1;
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[i][j]!==arr[j][i]){
                answer= 0;            }
            console.log(arr[i][j]!==arr[j][i])
        }
    }
    return answer;
}