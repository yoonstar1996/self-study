import { User } from "../entities/User";

export interface UserRepo {
  getUser(): Promise<User[] | null>;
}
