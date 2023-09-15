function solution(my_string) {
    return my_string.split("").map((i)=>Number(i)).filter((i)=>i<10).sort();
}