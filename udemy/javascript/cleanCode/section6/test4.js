function Person1(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const person1 = new Person1("yoon", 29, "서울");

// 위의 코드를 아래와 같이 수정

function Person2({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location ?? "서울";
}

const person2 = new Person2({
  name: "yoon",
  age: 29,
  location: "서울",
});

// 필수값이 존재할 때

function Person3(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location ?? "서울";
}

const yoonOptions = {
  age: 29,
  location: "서울",
};

const person3 = new Person3("yoon", yoonOptions);

//

const orders = ["First", "Second", "Third"];

const st = orders[0];
const rd = orders[2];

const [fist, , third] = orders;

const { 0: st2, 2: rd2 } = orders;
