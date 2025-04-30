const STATUS = deepFreeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

STATUS.PENDING = "P2";

console.log(STATUS); // {PENDING: "PENDING", SUCCESS: "SUCCESS", FAIL: "FAIL"}

Object.isFrozen(STATUS); // true

// shallow copy vs deep copy

Object.isFrozen(STATUS.OPTIONS); // false

STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";
delete STATUS.RED;

console.log(STATUS.OPTIONS); // {GREEN: "G", YELLOW: "Y"}

function deepFreeze(targetObj) {
  // 1. 객체를 순회
  // 2. 값이 객체인지 확인
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze
  Object.keys(targetObj).forEach((key) => {
    if (/**객체가 맞다면 */ typeof key === "object") {
      deepFreeze(targetObj[key]);
    }
  });

  return Object.freeze(targetObj);
}
