{
  let data = [1, 10, 9, 1999];
  data.sort((a, b) => a - b);
  // console.log("data: ", data);
}
{
  let data = [
    { x: 1, y: 10 },
    { x: 5, y: 3 },
  ];
  data.sort((a, b) => a.x - b.x);
  // console.log("data: ", data);
}

{
  let data = [2, 4, 22, 34, 16, 34, 23, 12, 45, 67, 89]
    // 1. 20보다 큰 값으로 필터링
    .filter((el) => el > 20)
    // 2. 2배씩 곱해서
    .map((el) => el * 2)
    // 3. 내림차순으로 정렬한 후
    .sort((a, b) => b - a)
    // 4. 총합을 구하시오.
    .reduce((acc, cur) => acc + cur, 0);
  console.log("data: ", data);
}
