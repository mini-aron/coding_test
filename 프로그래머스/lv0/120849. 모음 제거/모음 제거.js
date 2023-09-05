function solution(my_string) {
    return my_string.split("").filter(i=>!["a","e","i","o","u"].includes(i)).join("");
}