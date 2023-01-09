"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "mark";
        this.country = "Korea";
        this.country = "korea";
    }
}
const p1 = new Person("yoon", 39);
console.log(p1.name); // get을 하는 함수 getter
// p1.name = "kyeongmin"; // set을 하는 함수 setter
console.log(p1.name);
