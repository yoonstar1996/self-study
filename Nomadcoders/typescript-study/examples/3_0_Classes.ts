abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;

  public getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player2 extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const nico2 = new Player2("nico", "las", "니꼬");
nico2.getFullname();
nico2.getNickName();
