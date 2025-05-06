import { Post } from "../entities/Post";

export interface PostRepo {
  getPost(): Promise<Post[] | null>;

  getPostById(id: number): Promise<Post | null>;

  create(data: {
    title: string;
    content: string;
    authorId: number;
  }): Promise<Post | null>;
}
