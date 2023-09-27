function solution(box, n) {
    return box[0]<n||n===0?0:Math.floor(box[2]/n)*(Math.floor(box[0]/n)*Math.floor(box[1]/n))
}