function solution(s) {
    return [...s].filter(i=>[...s].indexOf(i)===[...s].lastIndexOf(i)).sort().join("");
}