const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line",function(line){
    input.push(line)
})

rl.on("close",function() {
    let A = input[0].split(" ")
    console.log(A[0]/A[1])
})