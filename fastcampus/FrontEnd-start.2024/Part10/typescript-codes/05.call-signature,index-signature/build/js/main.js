"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.234;
// String
let string;
let firstName = "Kyeong min";
let lastName = "Yoon";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["Park", "Lee"];
// 여러 타입을 가지는 배열 ( 유니언 타입 사용 )
let array1 = ["John", 1, 2];
let array2 = ["Park", 3, 4];
// 여러 타입을 단언 X > any
let someArray = ["John", 1, false, {}, []];
// Interface, Type
// 읽기 전용 배열 생성 ( readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// stringArray.push("C");
// numberArray[0] = 3;
// Tuple
let tuple1;
tuple1 = ["A", 2];
// tuple1 = ["a", 1, 2];
// tuple1 = [2, "A"];
let users;
users = [
    [1, "A"],
    [2, "B"],
];
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);
// any
let any = "abc";
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: string = unknown;
let string1 = unknown;
// Object
let obj = {};
let arr = [];
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: "title 1",
    // desc: "desc 1",
};
// Union
let union;
union = "hi";
union = 123;
// union = [];
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2 = () => {
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
let voide2 = undefined;
// void
function greeting() {
    console.log("hi");
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error("error");
}
function keepProcessing() {
    while (true) {
        console.log("hi");
    }
}
const never1 = [];
// never1.push(1);
