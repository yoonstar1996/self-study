"use strict";
const e1 = {
    name: "Yoon",
    privileges: ["front-end"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`startDate: ${emp.startDate}`);
    }
}
function add(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    else
        return a + b;
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
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(Vehicle) {
    Vehicle.drive();
}
function moveAnimal(animal) {
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
const userInputEl = (document.getElementById("user-input"));
userInputEl.value = "Hi there!";
const errorBag = {
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
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
