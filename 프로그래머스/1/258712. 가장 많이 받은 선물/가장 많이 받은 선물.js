function solution(friends, gifts) {
    let gifted = {}; // gifted = {"friend 이름": {"선물 준 친구 이름": 이 친구에게 준 선물 개수}}
    let gift_idx = {}; // 선물 지수 
    
    // 딕셔너리 초기화
    friends.forEach(friend => {
        gifted[friend] = {};
        gift_idx[friend] = 0;
    });
    
    gifts.forEach(gift => {
        let [t, f] = gift.split(' '); // t: 선물을 준 사람, f: 받은 사람
        if (f in gifted[t]) {
            gifted[t][f] += 1;
        } else {
            gifted[t][f] = 1;
        }
        // 선물 지수 반영
        gift_idx[t] += 1;
        gift_idx[f] -= 1;
    });
    
    // 각자 받게 될 선물 개수
    let will_get = new Array(friends.length).fill(0); // friends 리스트 순서대로 저장
    for (let i = 0; i < friends.length; i++) {
        let curr = friends[i]; // 인덱스 i에 해당하는 친구
        for (let j = i+1; j < friends.length; j++) {
            let another = friends[j]; // 인덱스 j에 해당하는 친구
            // curr가 another에게 준 선물 개수
            let a = gifted[curr][another] || 0; 
            // another가 curr에게 준 선물 개수
            let b = gifted[another][curr] || 0; 
            
            if (a > b) { // curr가 선물을 더 많이 줬다면
                will_get[i]++;
            } else if (a < b) { // another가 선물을 더 많이 줬다면
                will_get[j]++;
            } else if (a === b) { // 둘이 선물을 주고 받은 개수가 같다면 선물 지수 확인
                let ai = gift_idx[curr];
                let bi = gift_idx[another];
                if (ai > bi) {
                    will_get[i]++;
                } else if (ai < bi) {
                    will_get[j]++;
                }
            }
        }
    }
    
    let answer = Math.max(...will_get);
    return answer;
}
