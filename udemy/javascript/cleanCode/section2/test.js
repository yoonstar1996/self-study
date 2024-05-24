typeof "문자열"; // string
typeof 123; // number
typeof true; // boolean
typeof null; // object
typeof undefined; // undefined
typeof Symbol; // symbol

function myFunction() {}
class MyClass {}
const str = new String("문자열");

typeof myFunction; // function
typeof MyClass; // function
typeof str; // object

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: "yoon",
  age: 29,
};

const yoon = new Person("yoon", 29);

yoon instanceof Person; // true
p instanceof Person; // false

const arr = [];
const func = function () {};
const date = new Date();

arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true

arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

Object.prototype.toString.call(""); // '[object String]'
Object.prototype.toString.call(1); // '[object Number]'
Object.prototype.toString.call(true); // '[object Boolean]'
Object.prototype.toString.call(null); // '[object Null]'
Object.prototype.toString.call(undefined); // '[object Undefined]'
Object.prototype.toString.call(Symbol()); // '[object Symbol]'
