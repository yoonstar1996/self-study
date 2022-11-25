class People2 {
  constructor(
    public name: string,
    public id: string,
    public pw: string,
    public age: number,
    public gender: string
  ) {}
}
let green: People2 = new People2("Green", "orange", "tea", 30, "man");
console.log(green);
