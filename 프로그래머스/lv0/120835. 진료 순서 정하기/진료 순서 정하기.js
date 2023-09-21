function solution(emergency) {
    const sortArr = [...emergency]
    sortArr.sort((a,b)=>b-a)
    return emergency.map((i)=>sortArr.indexOf(i)+1);
}