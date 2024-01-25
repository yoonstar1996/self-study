class Car {
  mileage = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive!";
  }

  breake() {
    return "break!";
  }
}

class Ford extends Car {}

const myFordCar = new Ford();

interface Part {
  seat: number;
  tire: number;
}

class Ford2 implements Car, Part {
  mileage = 1;
  price = 2;
  color = "red";
  drive() {
    return "drive!";
  }

  breake() {
    return "break!";
  }
  seat = 6;
  tire = 4;
}
