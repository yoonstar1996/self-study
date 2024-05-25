function example1() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// VS

function example2() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}

const temp = condition1;
condition2;
condition3;

function example3() {
  switch (temp) {
    case value1:
      return value1;
      break;
    case value2:
      return value2;
      break;
    case value3:
      return value3;
      break;
    default:
      return value4;
      break;
  }
}

const example = condition1 ? (a === 0 ? "zero" : "positive") : "negative";

const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : "이름없음";

  return `안녕하세요 ${name}`;
};
