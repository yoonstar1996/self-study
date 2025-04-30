const orders = ["first", "second", "third"];

for (let i = 0; i < orders.length; i++) {
  if (orders[i] === "second") {
    continue;
    break;
  }
  console.log(orders[i]);
}
