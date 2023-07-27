function solution(arr, queries) {
    var answer = [];
    queries.forEach((i)=>{
        const [s, e, k] = i;
        for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
    })
    return arr;
}