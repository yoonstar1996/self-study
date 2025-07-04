function solution(s) {
  var answer = "";
  let length = s.length;

  if (length % 2 === 1) {
    let index = Math.floor(length / 2);
    answer = s.slice(index, index + 1);
  } else {
    let index = Math.floor(length / 2);
    answer = s.slice(index - 1, index + 1);
  }

  return answer;
}
