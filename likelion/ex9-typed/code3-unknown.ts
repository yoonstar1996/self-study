{
  let msg: unknown = "hello world";
  msg = 123;

  // if (typeof msg === "number") {
  let total = (msg as number) + 10;
  console.log("total: ", total);
  // }
}
