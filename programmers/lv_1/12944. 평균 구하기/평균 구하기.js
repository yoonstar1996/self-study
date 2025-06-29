function solution(arr) {
  const length = arr.length;
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / length;
}
