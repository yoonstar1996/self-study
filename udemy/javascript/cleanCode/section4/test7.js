const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log("거짓인 경우에만 실행");
}

if (isNotCondition) {
  console.log("거짓인 경우에만 실행");
}

// 숫자일때만
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

if (isNumber(3)) {
  console.log("숫자입니다.");
}
