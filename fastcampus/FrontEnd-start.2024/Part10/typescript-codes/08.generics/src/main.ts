function getArrayLength1(arr: number[]): number {
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, false];

getArrayLength1(array1);
// getArrayLength1(array2);
// getArrayLength1(array3);

function getArrayLength2<T>(arr: T[]): number {
  return arr.length;
}
getArrayLength2<number>(array1);
getArrayLength2<string>(array2);
getArrayLength2<boolean>(array3);

interface Vehicle<T> {
  name: string;
  color: string;
  option: T;
}

const car: Vehicle<{ price: number }> = {
  name: "Car",
  color: "red",
  option: {
    price: 1000,
  },
};

const bike: Vehicle<boolean> = {
  name: "Bike",
  color: "green",
  option: true,
};

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};
const array11 = makeArr<number, number>(4, 5);
const array22 = makeArr<string, string>("a", "b");

const makeArr2 = <T, Y = string>(x: T, y: Y): [T, Y] => {
  return [x, y];
};
const array33 = makeArr2<string>("a", "b");

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};
makeFullName({ firstName: "John", lastName: "Doe", location: "Seoul" });
// makeFullName({ lastName: "Doe", location: "Seoul" });
makeFullName({
  firstName: "John",
  lastName: "Doe",
  hello: "Greeting",
  age: 23,
});
