// const names: Array<string> = ["Yoon", "star"];

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Yoon" }, { age: 29 });
// console.log(mergedObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desText = "Got no value.";
  if (element.length === 1) {
    desText = "Got 1 elements.";
  } else if (element.length > 1) {
    desText = `Got ${element.length} elements.`;
  }
  return [element, desText];
}

// console.log(countAndDescribe(10));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

// extractAndConvert({ name: "Yoon" }, "name");

class DataStorage {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10);
textStorage.addItem("Yoon");
textStorage.addItem("star");
textStorage.removeItem("Yoon");
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const yoonObj = { name: "Yoon" };
// objStorage.addItem(yoonObj);
// objStorage.addItem({ name: "star" });
// // ...
// objStorage.removeItem(yoonObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Yoon", "star"];
// names.push("Park");
