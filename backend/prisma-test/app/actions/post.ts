import { CreatePostUsecase } from "@/application/usecase/post/CreatePostUsecase";
import { PrismaPostRepo } from "@/infra/repositories/prisma/PrismaPostRepo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const authorId = 2;

  const repo = new PrismaPostRepo();
  const useCase = new CreatePostUsecase(repo);
  const post = await useCase.execute({ title, content, authorId });

  if (!post) {
    redirect("/posts");
  }

  // 캐시 갱신 & 리다이렉트
  revalidatePath("/posts");
  redirect(`/posts/${post.id}`);
}
