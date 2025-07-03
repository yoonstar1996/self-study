function solution(seoul) {
  let index;
  for (let i = 0; i < seoul.length; i++) {
    const text = seoul[i];
    if (text === "Kim") {
      index = i;
    }
  }
  return `김서방은 ${index}에 있다`;
}
