const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const N = input[0];
const M = input[1];

function func(N, M) {
  const seq = [...Array(M)].fill(0);
  const visited = [...Array(N + 1)].fill(false); // 수정: N까지의 자연수를 다루므로 N+1 크기의 배열 필요
  let result = "";

  function dfs(i) {
    if (i === M) {
      const arr = [];
      for (let j = 0; j < M; j++) {
        arr.push(seq[j]); // 수정: seq[i] 대신에 seq[j] 사용
      }
      result += `${arr.join(" ")}\n`;
      return;
    }
    for (let k = 1; k <= N; k++) {
      if (!visited[k]) {
        seq[i] = k;
        visited[k] = true; // 수정: ture 대신 true
        dfs(i + 1);
        visited[k] = false;
      }
    }
  }

  dfs(0);
  return result;
}

console.log(func(N, M)); // 수정: N.M 대신 N, M 사용
