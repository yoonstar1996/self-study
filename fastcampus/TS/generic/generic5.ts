class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Mark", 29);
// new Person<string>(123);
// new Person<string, number>(213, "mark");
