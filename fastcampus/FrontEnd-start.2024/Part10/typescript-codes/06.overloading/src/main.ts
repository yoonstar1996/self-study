function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add("hello", "wodld");
add(1, 2);
// add(1, "hello");

function saySomething(word: string | string[]): string {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" ");
  }
  throw new Error("unable to say something");
}

saySomething("hello");
saySomething(["hello", "world"]);

function saySomething2(word: string): string;
function saySomething2(word: string[]): string;
function saySomething2(word: any): any {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" ");
  }
  throw new Error("unable to say something");
}
