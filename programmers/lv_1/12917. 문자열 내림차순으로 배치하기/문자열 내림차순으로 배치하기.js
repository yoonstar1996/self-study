function solution(s) {
  const arr = s
    .split("")
    .map((el) => el.charCodeAt(0))
    .sort((a, b) => b - a)
    .map((el) => String.fromCharCode(el))
    .join("");
  return arr;
}
