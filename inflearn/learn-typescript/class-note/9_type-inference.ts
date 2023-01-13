// 타입 추론 기본 1
let aa = "10";

function getB(b = 10) {
  let c = "hi";
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown3<T> {
  value3: T;
  title3: string;
}
let shoppingItem3: Dropdown3<string> = {
  value3: "gloves",
  title3: "장갑",
};

// 타입 추론 기본 3
interface Dropdown4<T> {
  value3: T;
  title3: string;
}
interface DetailedDropdown<K> extends Dropdown4<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<number> = {
  title3: "abc",
  description: "ab",
  value3: 12,
  tag: 34,
};

// Best Common Type
let arr2 = [1, 2, true, "a"];
