const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map( v => v.split(' ').map(Number));
let i = 0;
while(true){
    if(input[i][0] === 0 && input[i][1] === 0) {
        break;
    }else if(input[i][0] > input[i][1]){
        console.log('Yes');
    }else{
        console.log('No');
    } 
    i++;
}