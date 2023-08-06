function reverseSubstring(my_string, s, e) {
  // 문자열을 배열로 변환하여 인덱스 s부터 인덱스 e까지를 뒤집습니다.
  const chars = my_string.split('');
  for (let i = s; i <= Math.floor((e + s) / 2); i++) {
    const temp = chars[i];
    chars[i] = chars[e - (i - s)];
    chars[e - (i - s)] = temp;
  }
  return chars.join('');
}

function solution(my_string, queries) {
     for (const [s, e] of queries) {
    my_string = reverseSubstring(my_string, s, e);
  }
  return my_string;
}