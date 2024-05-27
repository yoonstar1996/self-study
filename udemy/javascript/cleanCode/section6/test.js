const firstName = "star";
const lastName = "yoon";

const person1 = {
  firstName: "star",
  lastName: "yoon",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// 위 객체를 아래와 같이 수정

const person2 = {
  firstName,
  lastName,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
