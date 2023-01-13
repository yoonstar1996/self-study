interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

let seho2: IPerson;
let seho3: TPerson;

type MyString = string;
let str3: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
// dkf
