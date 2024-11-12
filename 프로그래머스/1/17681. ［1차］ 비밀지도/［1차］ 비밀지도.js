function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0;i<n;i++){
    answer.push((parseInt(arr1[i])|parseInt(arr2[i])).toString(2).padStart(n," ").replace(/1/g,"#").replace(/0/g," "))
    }
    return answer;
}