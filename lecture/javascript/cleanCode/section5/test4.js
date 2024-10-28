const arrayLikeObject = {
  0: "HEllo",
  1: "WORLD",
  length: 2,
};
console.log(Array.isArray(arrayLikeObject)); // false

const arr = Array.from(arrayLikeObject);
console.log(arr); // [HEllo, WORLD]
console.log(Array.isArray(arr)); // true
console.log(arr.length); // 2
