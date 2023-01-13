function logText(text: any) {
  console.log(text);
  return text;
}
logText(10); // 숫자 10
logText("10"); // 문자열 '10'
logText(true); // 진위값 true

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
logText2<string>("하이");

function logText3(text: string) {
  console.log(text);
  // text.split("").reverse().join("");
  return text;
}
logText3("abc");
// logText3(10);

function logNumber(num: number) {
  console.log(num);
  return num;
}
logNumber(10);

function logText4(text: string | number) {
  console.log(text);
  return text;
}
const a = logText4("a");
logText4(10);

function logText5<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText5<String>("a");
logText5(10);
str.split("");
const login = logText5<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const objI: Dropdown = { value: "10", selected: true };

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const objJ: Dropdown2<string> = { value: "10", selected: true };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2("a");
// logTextLength2(23);
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption(10);
// getShoppingItemOption<string>("10");
getShoppingItemOption("name");
getShoppingItemOption("price");
