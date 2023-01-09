"use strict";
class Person1 {
    hello() {
        console.log("안녕하세요", Person1.CITY);
    }
    change() {
        Person1.CITY = "LA";
    }
}
Person1.CITY = "Seoul";
const per1 = new Person1();
per1.hello();
const per2 = new Person1();
per2.hello();
per1.change();
per2.hello();
// Person1.hello();
