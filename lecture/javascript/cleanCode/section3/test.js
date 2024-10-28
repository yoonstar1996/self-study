// 경계 다루기(min - max)
// 1. 최솟값과 최댓값을 다룬다.
// 2. 최솟값과 최댓값 포함 여부를 결정해야한다.(이상-초과/아하-미만)
// 3. 혹은 네이밍에 최솟값과 최댓값 포함 여부를 표현한다.

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER_LIMIT = 1;
const MAX_IN_NUMBER = 100;

genRandomNumber(MIN_NUMBER_LIMIT, MAX_IN_NUMBER);

const MAX_AGE = 20;

function isAdult(age) {
  // 최솟값, 최댓값(포함되는지, 안되는지)
  // 이상, 초과 vs 이하, 미만
  if (age >= MAX_AGE) {
    return true;
  } else {
    return false;
  }
}
