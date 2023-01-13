type Heroes = "Hulk" | "Captin" | "Thor";
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Captin: 110,
  Thor: 1000,
};

// for in 반복문
let arr3 = ["a", "b", " c"];
for (let key in arr3) {
  console.log(arr[key]);
}
