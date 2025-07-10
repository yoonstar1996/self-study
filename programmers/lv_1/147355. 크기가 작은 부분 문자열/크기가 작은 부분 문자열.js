function solution(t, p) {
  var answer = 0;
  const tLength = t.length;
  const pLength = p.length;
  for (let i = 0; i <= tLength - pLength; i++) {
    const str = t.substring(i, i + pLength);
    if (+str <= +p) answer++;
  }
  return answer;
}
