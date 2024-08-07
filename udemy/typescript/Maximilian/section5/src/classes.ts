abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  abstract newMethod(this: Department): void;

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "id2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  private lastAdmin: string;
  private static instance: ITDepartment;

  newMethod() {
    console.log("abstract 메서드 입니다.");
  }

  get mostRecentAdmin() {
    if (this.lastAdmin) {
      return this.lastAdmin;
    }
    throw new Error("No admin found");
  }

  set mostRecentAdmin(value: string) {
    if (!value) {
      throw new Error("value를 입력해주세요.");
    }
    this.addEmployee(value);
  }

  private constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
    this.lastAdmin = admins[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment("id3", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Yoon") {
      return;
    }
    this.employees.push(name);
  }
}

const it = ITDepartment.getInstance();
const it2 = ITDepartment.getInstance();
console.log(it === it2);
