interface Developer6 {
  name: string;
  skill: string;
}

interface Person5 {
  name: string;
  age: number;
}

function introduce(): Developer6 | Person5 {
  return { name: "tony", age: 130, skill: "iron" };
}
let tony = introduce();
console.log(tony);

if ((tony as Developer6).skill) {
  let skill = (tony as Developer6).skill;
  console.log(skill);
} else if ((tony as Person5).age) {
  let age = (tony as Person5).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper6(target: Developer6 | Person5): target is Developer6 {
  return (target as Developer6).skill !== undefined;
}

if (isDeveloper6(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
