"use strict";
const bodyElement1 = document.querySelector("body");
bodyElement1.innerText = "Hello, World !";
const bodyElement2 = document.querySelector("body");
bodyElement2.innerText = "Hello, World !";
const bodyElement3 = document.querySelector("body");
if (bodyElement3) {
    bodyElement3.innerText = "Hello, World !";
}
// function func1(arg: string | null) {
//   return (arg as string).toLowerCase;
// }
function func1(arg) {
    return arg === null || arg === void 0 ? void 0 : arg.toLowerCase;
}
func1("Hello");
func1(null);
