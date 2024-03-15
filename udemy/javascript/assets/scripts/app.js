// import { apiKey } from "./util.js";

// console.log(apiKey);

// const userMessgae = "Hello World!";
// console.log(userMessgae);

// console.log(10 <= 10);

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// greet("Yoon");

// const combine = (a, b, c) => {
//   return (a * b) / c;
// };
// let result = combine(2, 3, 4);
// console.log(result);

// const user = {
//   name: "Yoon",
//   age: 29,
//   greet() {
//     console.log(this.name);
//   },
// };
// console.log(user.age);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }
// const user1 = new User("Moon", 29);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// // console.log(hobbies);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);

// const newHobbies = hobbies.map((item, index) => ({
//   text: item,
//   index,
// }));
// console.log(newHobbies);

// function transfromToObjects(numberArray) {
//   return numberArray.map((item) => ({
//     val: item,
//   }));
// }
// let result = transfromToObjects([1, 2, 3]);
// console.log(result);

// const [firstName, lastName] = ["Yoon", "Kyeongmin"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// const { name: userName, age } = {
//   name: "Yoon",
//   age: 29,
// };

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Yoon",
//   age: 29,
// };
// const newHobbies = ["Readings"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// setTimeout(() => {
//   console.log("Timed out!");
// }, 1000);

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }
//   greet();
// }
// init();
