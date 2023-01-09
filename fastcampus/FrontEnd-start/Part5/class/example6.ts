abstract class AbstractPerson {
  protected _name: string = "mark";

  abstract setName(name: string): void;
}

// new AbstractPerson();

class Person2 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const person2 = new Person2();
// person2.setName();
