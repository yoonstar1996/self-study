const arr = [1, 2, 3];

arr[3] = "test";
arr["property"] = "string value";
arr["obj"] = {};
arr[{}] = [1, 2, 3];
arr["func"] = function () {
  return "hello";
};

console.log(arr); // {0: 1, 1: 2, 2: 3, 3: "test", property: "string value", obj: {}, "{}": [1, 2, 3], func: ƒ}

// 위의 코드와 아래의 코드는 같은 결과를 나타낸다.
// 위의 코드는 배열의 인덱스를 사용하여 값을 할당하고, 아래의 코드는 객체의 키를 사용하여 값을 할당한다.

const obj = {
  arr: [1, 2, 3],
  3: "test",
  property: "string value",
  obj: {},
  "{}": [1, 2, 3],
  func: function () {
    return "hello";
  },
};

console.log(obj); // {arr: [1, 2, 3], 3: "test", property: "string value", obj: {}, "{}": [1, 2, 3], func: ƒ}

const arr1 = "[1, 2, 3]";
console.log(Array.isArray(arr1)); // false

const arr2 = [1, 2, 3];
console.log(Array.isArray(arr2)); // true
