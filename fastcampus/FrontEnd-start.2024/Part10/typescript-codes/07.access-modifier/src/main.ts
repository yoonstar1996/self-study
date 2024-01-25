class Post {
  constructor(public id: number = 0, protected title: string = "") {}

  getPost() {
    return `postId: ${this.id}, postTitle: ${this.title}`;
  }
}

const post1: Post = new Post(1, "title 1");
console.log(post1.id); // 1
// console.log(post1.title); // title 1

class PostB extends Post {
  getPost() {
    return this.title;
  }
}
