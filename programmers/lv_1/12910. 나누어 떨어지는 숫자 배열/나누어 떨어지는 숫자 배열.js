function solution(arr, divisor) {
  var answer = [];
  arr.sort((a, b) => a - b);
  for (let num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }

  if (answer.length === 0) answer.push(-1);
  return answer;
}
