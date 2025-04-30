// 비순수 함수
let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(newNum) {
  return num1 + newNum;
}

impureSum1(); // 30

num1 = 20;

impureSum1(); // 50

impureSum2(30); // 40

num1 = 100;

impureSum2(30); // 130

// 순수 함수로 수정하기

function pureSum(num1, num2) {
  return num1 + num2;
}

pureSum(20, 40); // 60
