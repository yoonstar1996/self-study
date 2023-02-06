function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("Mark");
helloBasic(36);
