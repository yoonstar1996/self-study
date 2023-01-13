interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 20,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum2: SumFunction;
sum2 = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj2["cssFile"] = "a";
Object.keys(obj2).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let capt3: Developer = {
  language: "ts",
  name: "캡3",
  age: 3,
};
