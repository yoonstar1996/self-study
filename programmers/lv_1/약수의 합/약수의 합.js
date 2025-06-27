function solution(n) {
  const arr = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
      const a = n / i;
      if (i !== a) arr.push(a);
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}
