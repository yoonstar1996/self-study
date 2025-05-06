import { User } from "@/domain/entities/User";
import { UserRepo } from "@/domain/repositories/UserRepo";

export class GetUsersUseCase {
  constructor(private userRepo: UserRepo) {}

  async execute(): Promise<User[] | null> {
    return this.userRepo.getUser();
  }
}
