import { NextRequest, NextResponse } from "next/server";

import { GetPostByIdUsecase } from "@/application/usecase/post/GetPostByIdUsecase";
import { PrismaPostRepo } from "@/infra/repositories/prisma/PrismaPostRepo";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const repo = new PrismaPostRepo();
  const useCase = new GetPostByIdUsecase(repo);
  const post = await useCase.execute(Number(id));

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
