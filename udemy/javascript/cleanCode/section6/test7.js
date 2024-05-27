const person = {
  name: "yoon",
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },
  bar: "string",
};

console.log(foo.hasOwnProperty("bar")); // hasOwnProperty
console.log(Object.prototype.hasOwnProperty.call(foo, "bar")); // true
