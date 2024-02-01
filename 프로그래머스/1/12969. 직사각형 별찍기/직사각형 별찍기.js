process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
   for(let i = b;i>0;i--){
       for(let j = a;j>0;j--){
           process.stdout.write("*")
       }
       process.stdout.write("\n")
   }
});