function solution(x, n) {
  const arr = Array.from({ length: n }, (_, i) => x + i * x);
  return arr;
}
