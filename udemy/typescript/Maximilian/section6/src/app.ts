interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "Yoon",
  privileges: ["front-end"],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`startDate: ${emp.startDate}`);
  }
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  else return a + b;
}

const result = add("Yoon", "star");
result.split(" ");

class Car {
  drive() {
    console.log("drive..");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck..");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(Vehicle: Vehicle) {
  Vehicle.drive();
}

// useVehicle(v1);
// useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${speed}`);
}

// const userInputEl = <HTMLInputElement>document.getElementById("user-input")!;
const userInputEl = (<HTMLInputElement>(
  document.getElementById("user-input")!
)) as HTMLInputElement;
userInputEl.value = "Hi there!";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  userName: "Must start with a capital character!",
};

const fetchedUserData = {
  id: "id1",
  name: "Yoonstar",
  // job: { title: "Student", description: "Front-end" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
// console.log(fetchedUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
