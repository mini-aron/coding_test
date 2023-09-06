function solution(array, height) {
    return array.filter(i=>height<i).length
}