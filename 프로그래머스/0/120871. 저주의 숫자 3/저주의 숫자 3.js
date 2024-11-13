function solution(n) {
    let count = 0;
    let number = 0;
    while (count < n) {
        number += 1;
                if (number % 3 === 0 || String(number).includes('3')) {
            continue;
        }
        count += 1;
    }
    return number;
}
