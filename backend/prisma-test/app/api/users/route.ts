// app/api/users/route.ts

import { GetUsersUseCase } from "@/application/usecase/user/GetUserUsecase";
import { NextResponse } from "next/server";
import { PrismaUserRepo } from "@/infra/repositories/prisma/PrismaUserRepo";

export async function GET() {
  const repo = new PrismaUserRepo();
  const usecase = new GetUsersUseCase(repo);
  const users = await usecase.execute();

  if (!users) {
    return NextResponse.json({ message: "Users not found" }, { status: 404 });
  }

  return NextResponse.json(users);
}
