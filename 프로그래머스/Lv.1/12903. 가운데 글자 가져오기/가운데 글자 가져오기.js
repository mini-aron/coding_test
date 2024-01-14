function solution(s) {
    let buffer = Math.floor((s.length/2) - (s.length%2?0:1))
    return s.slice(buffer,s.length-buffer);
}