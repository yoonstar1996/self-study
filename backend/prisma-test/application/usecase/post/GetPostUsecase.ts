import { Post } from "@/domain/entities/Post";
import { PostRepo } from "@/domain/repositories/PostRepo";

export class GetPostUsecase {
  constructor(private postRepo: PostRepo) {}

  async execute(): Promise<Post[] | null> {
    return this.postRepo.getPost();
  }
}
