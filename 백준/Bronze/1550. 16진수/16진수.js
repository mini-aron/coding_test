const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input = 0;

rl.on("line", (line) => {
    input = parseInt(line, 16);
    rl.close();
});

rl.on("close", () => {
    console.log(input)
    process.exit();
});