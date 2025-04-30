setTimeout(() => {
  scrollToTop();
}, 3 * 60 * 1000);

// 위 코드를 아래와 같이 수정하는 것이 좋다.

const COMMON_DELAY_MS = 3 * 60 * 1000;

setTimeout(() => {
  scrollToTop();
}, COMMON_DELAY_MS);

const PRICE = {
  MIN: 1_000_000, // 1백만원
  MAX: 100_000_000, // 1억
};

getRandomPrice(1, 10);

getRandomPrice(PRICE.MIN, PRICE.MAX);

function isValidName1(name) {
  return carName.length >= 1 && carName.length <= 5;
}

// 위 코드를 아래와 같이 수정하는 것이 좋다.

const CAR_NAME_LEN = {
  MIN: 1,
  MAX: 5,
};

function isValidName2(name) {
  return (
    carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX
  );
}
