function solution(arr, intervals) {
    let [a,b] = intervals[0];
    let [c,d] = intervals[1]
    console.log(a,b,c,d)
    return (arr.slice(a,b+1)+","+arr.slice(c,d+1)).split(",").map(Number);
}