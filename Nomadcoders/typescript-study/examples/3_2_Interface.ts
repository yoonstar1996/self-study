type Nickname = string;
type Heath = number;
type Friends = string[];

type Player3 = {
  nickname: Nickname;
  healthBar: Heath;
};

const nico3: Player3 = {
  nickname: "nico",
  healthBar: 20,
};

type Food = string;

const kimchi2: Food = "delicious";

//

type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player4 = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico4: Player4 = {
  nickname: "nico",
  team: "red",
  // team: "pink",
  health: 10,
};

//

interface Player5 {
  nickname: string;
  team: Team;
  health: Health;
}

interface User6 {
  name: string;
}

interface Player6 extends User6 {}
const nico6: Player6 = {
  name: "nico",
};

//

interface User7 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player7 implements User7, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  sayHi(name: string): string {
    throw new Error("Method not implemented.");
  }
  fullName(): string {
    throw new Error("Method not implemented.");
  }
}

function makeUser(user: User7) {
  return "hi";
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xxx",
  sayHi: (name) => "string",
});
