import { Post } from "@/domain/entities/Post";
import { PostRepo } from "@/domain/repositories/PostRepo";
import { User } from "@/domain/entities/User";
import prisma from "@/lib/prisma";

export class PrismaPostRepo implements PostRepo {
  async getPost(): Promise<Post[] | null> {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });

    if (posts.length === 0) return null;

    return posts;
  }

  async getPostById(id: number): Promise<Post | null> {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });

    if (!post) return null;

    return post;
  }

  async create(data: {
    title: string;
    content: string;
    authorId: number;
  }): Promise<Post | null> {
    const post = await prisma.post.create({
      data,
      include: { author: true },
    });

    const authorEntity = new User(
      post.author.id,
      post.author.email,
      post.author.name
    );

    return new Post(
      post.id,
      post.title,
      post.content,
      post.published,
      post.authorId,
      authorEntity
    );
  }
}
