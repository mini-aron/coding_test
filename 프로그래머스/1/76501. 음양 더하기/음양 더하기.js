function solution(absolutes, signs) {
    return signs.reduce((a,b,idx)=>b?a+absolutes[idx]:a-absolutes[idx],0);
}