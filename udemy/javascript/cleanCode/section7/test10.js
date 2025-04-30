function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = add(1);
const addTwo = add(2);

console.log(addOne(3)); // 4

//

const arr = [1, 2, 3, "A", "B", "C"];

const isNumber1 = (value) => typeof value === "number";
const isString1 = (value) => typeof value === "string";

arr.filter(isNumber1); // [1, 2, 3]
arr.filter(isString1); // [A, B, C]

// closure 사용하기

function isTypeOf(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber2 = isTypeOf("number");
const isString2 = isTypeOf("string");

arr.filter(isNumber2); // [1, 2, 3]
arr.filter(isString2); // [A, B, C]
