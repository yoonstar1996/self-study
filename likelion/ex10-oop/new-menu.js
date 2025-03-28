import { Menu } from "./menu.js";

export default function NewMenu() {}

NewMenu.prototype = new Menu();
// NewMenu.prototype = Object.create(Menu.prototype);

let m1 = new NewMenu();
console.log(m1.toJSON());

function test1() {
  console.log("test1");
}
function test2() {
  console.log("test2");
}

export { test1, test2 };
