// 인터페이스
interface Developer7 {
  name: string;
  skill: string;
}

interface Person7 {
  name: string;
}
// class Person8 {
//   name: string;
// }
let dev: Developer7;
let per: Person7;
// dev = new Person8();

// 함수
let addd = function (a: number) {
  // ...
};

let summ = function (a: number, b: number) {
  // ...
};

// addd = summ;
summ = addd;

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;
