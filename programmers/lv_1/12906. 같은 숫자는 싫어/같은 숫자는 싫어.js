function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    const prev = arr[i - 1];
    if (cur !== prev) {
      answer.push(cur);
    }
  }

  return answer;
}
