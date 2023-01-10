function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["hello", "world"]);
helloArray(["hello", 5]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["hello", "world"]);
helloTuple(["hello", 5]);
