"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들이 발생함.
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(123).length);
