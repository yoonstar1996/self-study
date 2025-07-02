function solution(x) {
  const el = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return x % el === 0;
}
