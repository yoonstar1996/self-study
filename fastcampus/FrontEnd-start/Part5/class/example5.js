"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`);
    }
}
// const parent1 = new Parent("mark", 39);
// parent1.print();
class Child extends Parent {
    constructor(age) {
        super("mark Jr", age);
        this.gender = "male";
    }
}
const child1 = new Child(5);
child1.print();
