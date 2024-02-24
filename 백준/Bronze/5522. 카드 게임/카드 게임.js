let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((el) => Number(el));

console.log(input.reduce((past, curr) => past + curr, 0));