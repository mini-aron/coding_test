function solution(arr, queries) {
    const answer = new Array();
    queries.forEach((query) => {
        const [s, e, k] = query;
        const filtered = arr.filter((value, index) => s <= index && index <= e && k < value);
        answer.push(filtered.length ? Math.min(...filtered) : -1);
    });
    return answer;
}