function solution(n, m) {
  let 최대공약수 = 0;
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      최대공약수 = i;
    }
  }
  let 최소공배수 = (n * m) / 최대공약수;
  return [최대공약수, 최소공배수];
}
