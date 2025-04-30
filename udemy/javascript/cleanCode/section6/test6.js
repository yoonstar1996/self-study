class Car1 {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName1() {
    return this.brand + "-" + this.name;
  }
}

const casper1 = new Car1("캐스퍼", "현대");

class Car2 {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
}

Car2.prototype.sayName = function () {
  return this.brand + "-" + this.name;
};

const casper2 = new Car2("캐스퍼", "현대");
