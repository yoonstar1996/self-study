const prices = ["1000", "2000", "3000"];

const newPricesEach = prices.forEach((price) => price + "원");
const newPricesMap = prices.map((price) => price + "원");

console.log(newPricesEach); // undefined
console.log(newPricesMap); // ["1000원", "2000원", "3000원"]
