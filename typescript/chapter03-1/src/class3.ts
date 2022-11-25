interface IPeople3 {
  name: string;
  id: string;
  pw: string;
  age: number;
  gender: string;
}

class People3 {
  constructor(
    public name: string,
    public id: string,
    public pw: string,
    public age: number,
    public gender: string
  ) {}
}

let purple: People3 = new People3("purple", "yellow", "favorit", 27, "man");
console.log(purple);
