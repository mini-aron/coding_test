function solution(numbers) {
  let res = []

  for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
      for (let k=j+1; k<numbers.length; k++){
        res.push(numbers[i]+numbers[j]+numbers[k])
      }
    }
  }
  let result = res.filter((re) => re === 0).length
  return result
}