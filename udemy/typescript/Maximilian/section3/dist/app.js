"use strict";
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked!!");
});
function sayHello(name) {
    let userName = "Yoon";
    console.log("Hi " + name);
}
sayHello("Park"); // Hi Park
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
