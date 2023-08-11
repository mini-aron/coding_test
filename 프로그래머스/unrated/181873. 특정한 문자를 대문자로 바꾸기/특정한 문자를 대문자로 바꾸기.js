function solution(my_string, alp) {
    let le = new RegExp(alp,'g');
    return my_string.replace(le,alp.toUpperCase());
}