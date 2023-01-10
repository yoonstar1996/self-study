class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("mark", 39);
// new Person<string>(30);
new Person<string, number>("mark", 39);
