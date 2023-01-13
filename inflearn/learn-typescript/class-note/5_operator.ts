function logMessage(value: string): void {
  console.log(value);
}
logMessage("hello");
// logMessage(100);

function logMessage2(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  } else if (value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage2("hello");
logMessage2(100);

interface Developer5 {
  name: string;
  skill: string;
}

interface Person5 {
  name: string;
  age: number;
}
function askSomeone(someone: Developer5 | Person5) {
  someone.name;
  // someone.skill;
  // someone.age;
}
askSomeone({ name: "디벨로퍼5", skill: "웹개발" });
askSomeone({ name: "사람5", age: 30 });

function askSomeone2(someone: Developer5 & Person5) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({ name: "디벨로퍼5", skill: "웹개발", age: 30 });

// let seho4: string | number | boolean;
// let captin: string & number & boolean;
