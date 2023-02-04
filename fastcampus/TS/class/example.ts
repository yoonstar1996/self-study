class Person {
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  public constructor(private _name: string, private age?: number) {
    this.country = "U.S.A";
  }

  hello() {
    // this.country = "U.S.A";
  }
}

const p1 = new Person("Mark", 39);
console.log(p1.name); // get을 하는 함수 getter
// p1.name = "Yoon"; // set을 하는 함수 setter
console.log(p1.name); //
