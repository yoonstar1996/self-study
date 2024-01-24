interface getLikeNumber {
  (like: number): number;
}

interface Post1 {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post1: Post1 = {
  id: 1,
  title: "post 1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);

interface Post2 {
  id: number;
  title: string;
  [key: string]: unknown;
}

const post2: Post2 = {
  id: 2,
  title: "post 2",
};

post2["desc"] = "post2 desc";
post2["pages"] = 300;

interface Names {
  [item: number]: string;
}

const userNames: Names = ["John", "Park", "Kim"];
userNames[0];
