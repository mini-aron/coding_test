const solution=(n)=> new Array(n).fill(0).map((_,idx)=>idx+1).filter(i=>n%i===0).reduce((a,b)=>a+b,0)
