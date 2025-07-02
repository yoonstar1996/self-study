function solution(absolutes, signs) {
  var answer = 0;
  const arr = absolutes.map((el, i) =>
    signs[i] ? (answer += el) : (answer -= el)
  );
  return answer;
}
