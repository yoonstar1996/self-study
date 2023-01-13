function fetchItems() {
  let items = ["a", "b", "c"];
  return items;
}
let result = fetchItems();
console.log(result);

function fetchItems2(): Promise<string[]> {
  let items = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems2();
