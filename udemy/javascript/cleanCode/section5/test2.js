const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10;
console.log(arr.length); // 10
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;
  return array;
}

const arr2 = [1, 2, 3];
arr2.clear();
console.log(arr2); // []

const arr3 = [1, 2, 3];
console.log(clearArray(arr3)); // []
