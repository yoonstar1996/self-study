import { PostRepo } from "@/domain/repositories/PostRepo";

export class CreatePostUsecase {
  constructor(private postRepo: PostRepo) {}

  async execute(data: { title: string; content: string; authorId: number }) {
    return this.postRepo.create(data);
  }
}
