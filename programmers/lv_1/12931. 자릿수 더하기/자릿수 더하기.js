function solution(n) {
  const arr = n
    .toString()
    .split("")
    .map((el) => Number(el));

  return arr.reduce((a, b) => a + b, 0);
}
