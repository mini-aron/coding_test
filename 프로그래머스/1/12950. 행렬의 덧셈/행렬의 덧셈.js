function solution(arr1, arr2) {
    return arr1.map((i,idx)=>{
       return i.map((j,idx2)=>
                    j + arr2[idx][idx2]
            )
    })
}