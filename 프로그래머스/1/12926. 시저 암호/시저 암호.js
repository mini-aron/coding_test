function trans(char, n) {
    let number = char.charCodeAt();
    // 소문자 처리
    if (number >= 97 && number <= 122) {
        return (number - 97 + n) % 26 + 97;
    }
    // 대문자 처리
    if (number >= 65 && number <= 90) {
        return (number - 65 + n) % 26 + 65;
    }
    // 알파벳이 아닌 경우 그대로 반환
    return number;
}

function trans2(num) {
    return String.fromCharCode(num);
}

function solution(s, n) {
    return s.split('').map(char => {
        if (char === " ") return " "; // 공백은 그대로 반환
        return trans2(trans(char, n));
    }).join("");
}
