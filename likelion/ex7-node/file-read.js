let module1 = require("./module1");
let module2 = require("newlec-hello");
console.log(module2.hello());
let fs = require("fs");
// 1. 동기형 함수 사용
// let data = fs.readFileSync("data.txt", "utf8");

// 2. 비동기형 콜백함수 사용
// let data = fs.readFile("data.txt", "utf8", (err, data) => {
//   console.log("data1: ", data);
// });

// 3. 비동기형 Promise 사용
// const promise = fs.readFile("data.txt", "utf8");
// promise.then((data) => {
//   console.log("data1: ", data);
// });

// 4. 비동기형 async/await 사용
// (async () => {
//   let data = await fs.readFile("data.txt", "utf8");
//   console.log("data1: ", data);
// })();

// console.log(module1.add()); // 7
