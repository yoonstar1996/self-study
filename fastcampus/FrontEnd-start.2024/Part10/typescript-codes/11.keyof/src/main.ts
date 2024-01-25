interface IUser {
  name: string;
  age: number;
  address: string;
}

type UserKeys = keyof IUser;
// "name" | "age" | "address"

const user = {
  name: "John",
  age: 20,
  address: "Seoul",
};

type UserKeys2 = keyof typeof user;

enum UserRole {
  admin,
  manager,
}

type UserRoleKeys = keyof typeof UserRole;
