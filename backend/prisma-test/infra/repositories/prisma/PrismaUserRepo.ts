import { User } from "@/domain/entities/User";
import { UserRepo } from "@/domain/repositories/UserRepo";
import prisma from "@/lib/prisma";

export class PrismaUserRepo implements UserRepo {
  async getUser(): Promise<User[] | null> {
    const users = await prisma.user.findMany({ include: { posts: true } });

    if (!users) return null;

    return users.map((r) => new User(r.id, r.email, r.name || ""));
  }
}
