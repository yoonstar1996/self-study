// 타입 단언(type assertion)
let b;
b = 20;
b = "2";
let c = b as string;

// DOM API 조작
// <div id="app">hi</div>

let div = document.querySelector("div") as HTMLDivElement;
div.innerText;
