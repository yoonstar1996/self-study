class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`);
  }
}

// const parent1 = new Parent("mark", 39);
// parent1.print();

class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    super("mark Jr", age);
  }
}

const child1 = new Child(5);

child1.print();
