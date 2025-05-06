import { Post } from "@/domain/entities/Post";
import { PostRepo } from "@/domain/repositories/PostRepo";
import { User } from "@/domain/entities/User";
import prisma from "@/lib/prisma";

export class PrismaPostRepo implements PostRepo {
  async getPost(): Promise<Post[] | null> {
    const records = await prisma.post.findMany({
      include: {
        author: true,
      },
    });

    if (records.length === 0) return null;

    return records;
  }

  async getPostById(id: number): Promise<Post | null> {
    const record = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });

    if (!record) return null;

    return record;
  }

  async create(data: {
    title: string;
    content: string;
    authorId: number;
  }): Promise<Post | null> {
    const record = await prisma.post.create({
      data,
      include: { author: true },
    });

    const authorEntity = new User(
      record.author.id,
      record.author.email,
      record.author.name
    );

    return new Post(
      record.id,
      record.title,
      record.content,
      record.published,
      record.authorId,
      authorEntity
    );
  }
}
