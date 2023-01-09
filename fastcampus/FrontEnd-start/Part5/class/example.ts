class Person {
  public readonly name: string = "mark";
  private readonly country: string = "Korea";

  public constructor(private _name: string, private age: number) {
    this.country = "korea";
  }

  // hello() {
  //   this.country = "U.S.A";
  // }
}

const p1 = new Person("yoon", 39);
console.log(p1.name); // get을 하는 함수 getter
// p1.name = "kyeongmin"; // set을 하는 함수 setter
console.log(p1.name);
