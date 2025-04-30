function createElement1(type, height, width) {
  const element = document.createElement(type || "div");
  element.style.height = (height || 10) + "px";
  element.style.width = (width || 10) + "px";
  return element;
}

const el1 = createElement1("div", 0, 0);
console.log(el1.style.height); // 10px
console.log(el1.style.width); // 10px

function createElement2(type, height, width) {
  const element = document.createElement(type ?? "div");
  element.style.height = (height ?? 10) + "px";
  element.style.width = (width ?? 10) + "px";
  return element;
}

const el2 = createElement2("div", 0, 0);
console.log(el2.style.height); // 0px
console.log(el2.style.width); // 0px
