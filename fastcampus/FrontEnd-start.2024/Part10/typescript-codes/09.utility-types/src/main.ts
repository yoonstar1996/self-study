// Partial

interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: "john@abc.com" };
const all: Address = { email: "john@abc.com", address: "john" };

// Pick

interface Todo {
  title: string;
  desc: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Omit

interface Todo2 {
  title: string;
  desc: string;
  completed: boolean;
  createdAt: number;
}

type Todo2Preview = Omit<Todo2, "desc">;

const todo2: Todo2Preview = {
  title: "clean room",
  completed: false,
  createdAt: 213023,
};

// Required

type User = {
  firstName: string;
  lastName?: string;
};

let fisrtUser: User = {
  firstName: "john",
};

let secondUser: Required<User> = {
  firstName: "su",
  lastName: "park",
};

// Record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  boris: { age: 5, breed: "maine coon" },
  mordred: { age: 15, breed: "british shorthair" },
};

// ReturnType

type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "Hello";
// const b: ReturnType<typeof fn> = true;
