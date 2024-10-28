"use strict";
// const names: Array<string> = ["Yoon", "star"];
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Yoon" }, { age: 29 });
function countAndDescribe(element) {
    let desText = "Got no value.";
    if (element.length === 1) {
        desText = "Got 1 elements.";
    }
    else if (element.length > 1) {
        desText = `Got ${element.length} elements.`;
    }
    return [element, desText];
}
// console.log(countAndDescribe(10));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
// extractAndConvert({ name: "Yoon" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
// textStorage.addItem(10);
textStorage.addItem("Yoon");
textStorage.addItem("star");
textStorage.removeItem("Yoon");
// console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, desc, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Yoon", "star"];
// names.push("Park");
