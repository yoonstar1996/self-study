const originArray = ["123", "456", "789"];

const newArray = originArray;

const newArray2 = [...originArray];
console.log(newArray2); // [123, 456, 789]

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(originArray); // [0, 123, 456, 789, 10, 11, 12]
console.log(newArray); // [0, 123, 456, 789, 10, 11, 12]
