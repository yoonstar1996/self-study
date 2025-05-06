import { GetPostUsecase } from "@/application/usecase/post/GetPostUsecase";
import { NextResponse } from "next/server";
import { PrismaPostRepo } from "@/infra/repositories/prisma/PrismaPostRepo";

export async function GET() {
  const repo = new PrismaPostRepo();
  const usecase = new GetPostUsecase(repo);
  const posts = await usecase.execute();

  if (!posts) {
    return NextResponse.json({ message: "Posts not found" }, { status: 404 });
  }

  return NextResponse.json(posts);
}
