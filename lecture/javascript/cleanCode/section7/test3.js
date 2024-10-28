function toggleDisplay(isToggle) {
  // some code
}

function sum(sum1, sum2) {
  // some code
}

function genRandomNumber(min, max) {
  // some code
}

function timer(start, stop, end) {
  // some code
}

function genSquare(top, right, bottom, left) {
  // some code
}

// 예전 자바스크립트 문법
function createCar1(options) {
  var name = options.name;
  var brand = options.brand;
  var color = options.color;
  var type = options.name;
  return {
    name: options.name,
    brand: options.brand,
    color: options.color,
    type: options.type,
  };
}
createCar1({
  name: "name",
  brand: "brand",
  color: "color",
  type: "type",
});

// 위의 코드를 아래와 같이 수정 가능

function createCar2({ name, brand, color, type }) {
  if (!name) {
    throw new Error("name은 필수값입니다.");
  }
  return {
    name,
    brand,
    color,
    type,
  };
}
createCar2({ brand: "현대", color: "검정", type: "스포츠" });
