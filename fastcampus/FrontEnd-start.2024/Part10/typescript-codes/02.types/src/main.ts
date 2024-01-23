// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.234;

// String
let string: string;
let firstName: string = "Kyeong min";
let lastName: string = "Yoon";

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"];
let names2: Array<string> = ["Park", "Lee"];

// 여러 타입을 가지는 배열 ( 유니언 타입 사용 )
let array1: (string | number)[] = ["John", 1, 2];
let array2: Array<string | number> = ["Park", 3, 4];

// 여러 타입을 단언 X > any
let someArray: any[] = ["John", 1, false, {}, []];

// Interface, Type

// 읽기 전용 배열 생성 ( readonly, ReadonlyArray)
let stringArray: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push("C");
// numberArray[0] = 3;

// Tuple
let tuple1: [string, number];
tuple1 = ["A", 2];
// tuple1 = ["a", 1, 2];
// tuple1 = [2, "A"];

let users: [number, string][];
users = [
  [1, "A"],
  [2, "B"],
];

let tuple2: [string, number];
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);

// any
let any: any = "abc";
any = 1;
any = [];

// unknown
let unknown: unknown = false;
// let string1: string = unknown;
let string1: string = unknown as string;

// Object
let obj: object = {};
let arr: object = [];
// let nul: object = null;
let date: object = new Date();

const obj1: { id: number; title: string } = {
  id: 1,
  title: "title 1",
  // desc: "desc 1",
};

// Union
let union: string | number;
union = "hi";
union = 123;
// union = [];

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y;
};

let func2 = (): void => {
  console.log("hi");
};

// Null, Undefined
// let number1: number = undefined;
// let string2: string = null;
// let object: { a: 10; b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;
let voide2: void = undefined;

// void
function greeting(): void {
  console.log("hi");
}
const hi = greeting();
console.log(hi); // undefined

// never
function throwError(): never {
  throw new Error("error");
}

function keepProcessing(): never {
  while (true) {
    console.log("hi");
  }
}

const never1: never[] = [];
// never1.push(1);
