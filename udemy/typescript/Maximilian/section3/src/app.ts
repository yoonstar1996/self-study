const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("Clicked!!");
});

function sayHello(name: string) {
  let userName = "Yoon";
  console.log("Hi " + name);
}

sayHello("Park"); // Hi Park

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}
