const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);
const [a,b] = input; 
if(a<b) {
    console.log('<')
} 
else if(a>b) {
    console.log('>')
}
else {
    console.log('==')
}