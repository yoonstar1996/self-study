const user1 = {
  name: "yoon",
  getName: () => {
    return this.name;
  },
};

console.log(user1.getName()); // undefined

const user2 = {
  name: "park",
  getName() {
    return this.name;
  },
};

console.log(user2.getName()); // park

const Person = (name, city) => {
  this.name = name;
  this.city = city;
};

const person = new Person("yoon", "seoul");
console.log(person); // undefined
