function solution(s) {
    let buffer = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            buffer.push(true);  
        } else if (s[i] === ")") {
            if (buffer.length === 0) {
                return false;
            }
            buffer.pop();  
        }
    }
    
    return buffer.length === 0;
}
