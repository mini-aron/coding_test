function solution(arr, queries) {
    var answer = [];
    answer = arr;
    let buffer = 0;
    for(let i = 0;i < queries.length;i++){
        buffer = answer[queries[i][0]];
        answer[queries[i][0]] = answer[queries[i][1]];
        answer[queries[i][1]] = buffer;
    }
    return answer;
}
