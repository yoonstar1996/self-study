// type SuperPrint = <T>(a: T[]) => T;

// const superPrint: SuperPrint = (a) => a[0];

// const a = superPrint([1, 2, 3]);
// const b = superPrint([true, false, true]);
// const c = superPrint(["a", "b"]);
// const d = superPrint([1, 2, true, "a"]);

//

function superPrint<V>(a: V[]) {
  return a[0];
}

const a = superPrint<number>([1, 2, 3]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b"]);
const d = superPrint([1, 2, true, "a"]);

//

type Player<E> = {
  name: string;
  extraInfo: E;
};

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

//

type arrNumbers = Array<number>;

let arr: arrNumbers = [1, 2, 3, 4];

function printAllNumbers(arr: number[]) {
  //...
}
