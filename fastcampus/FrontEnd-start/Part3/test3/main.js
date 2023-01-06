import myData from "./myData.json";

console.log(myData);

const ulEl = document.querySelector("ul");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}

const user = {
  name: "Yoonstar",
  age: 96,
  emails: ["yagobo1110@naver.com", "dugks1110@gmail.com"],
};

const str = localStorage.getItem("user");
const obj = JSON.parse(str);
obj.age = 22;
console.log(obj);
localStorage.setItem("user", JSON.stringify(obj));
// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.getItem("user"));
// console.log(JSON.parse(localStorage.getItem("user")));

// localStorage.removeItem("user");
