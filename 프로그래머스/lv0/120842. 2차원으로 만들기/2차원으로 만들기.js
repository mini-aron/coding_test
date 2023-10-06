function solution(num_list, n) {
  const arr = [];
  for (let i = 0; i < num_list.length; i += n) {
    arr.push(num_list.slice(i, i + n));
  }
  return arr;
}