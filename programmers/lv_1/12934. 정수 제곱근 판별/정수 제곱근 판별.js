function solution(n) {
  const num = Math.floor(Math.sqrt(n));
  return num ** 2 === n ? (num + 1) ** 2 : -1;
}
