function solution(todo_list, finished) {
    return todo_list.filter((i,idx)=>!finished[idx]);
}