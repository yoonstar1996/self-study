function solution(s) {
  const s2 = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;
  console.log(s2);
  s2.forEach((el) => el === "p" && pCount++);
  s2.forEach((el) => el === "y" && yCount++);

  return pCount === yCount;
}
