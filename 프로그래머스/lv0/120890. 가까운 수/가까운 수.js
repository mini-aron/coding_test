function solution(array, n) {
    return array.reduce((a,b)=>Math.abs(n-a)>Math.abs(n-b)?b:(Math.abs(n-a)===Math.abs(n-b)?(a>b?b:a):a),array[0]);
}