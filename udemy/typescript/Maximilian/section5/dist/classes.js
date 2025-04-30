"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        // this.id = "id2";
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
    static createEmployee(name) {
        return { name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    newMethod() {
        console.log("abstract 메서드 입니다.");
    }
    get mostRecentAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin;
        }
        throw new Error("No admin found");
    }
    set mostRecentAdmin(value) {
        if (!value) {
            throw new Error("value를 입력해주세요.");
        }
        this.addEmployee(value);
    }
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
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
    addEmployee(name) {
        if (name === "Yoon") {
            return;
        }
        this.employees.push(name);
    }
}
const it = ITDepartment.getInstance();
const it2 = ITDepartment.getInstance();
console.log(it === it2);
