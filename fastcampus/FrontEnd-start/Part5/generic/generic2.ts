function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("mark", 39);
helloBasic(39, "mark");
