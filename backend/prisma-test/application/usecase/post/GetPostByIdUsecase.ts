import { Post } from "@/domain/entities/Post";
import { PostRepo } from "@/domain/repositories/PostRepo";

export class GetPostByIdUsecase {
  constructor(private postRepo: PostRepo) {}

  async execute(id: number): Promise<Post | null> {
    return this.postRepo.getPostById(id);
  }
}
