const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  if(input.length > 2){
      rl.close();
  }
});

rl.on("close", function () {
  let inputItem = input.map((i)=>Number(i))
  let A = inputItem[0];
  let B = inputItem[1];
     console.log(A+B);
});
