import { User } from "./User";

export class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string | null,
    public published: boolean,
    public authorId: number,
    public author: User
  ) {}
}
