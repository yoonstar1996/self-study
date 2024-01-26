const posts = [
  {
    id: "post 1",
    title: "It is a first post",
    description: "It is a first post description",
    comments: [
      {
        id: "comment 1",
        text: "It is a first comment",
        likes: 1,
      },
    ],
  },
  {
    id: "post 2",
    title: "It is a second post",
    description: "It is a second post description",
    comments: [],
  },
];

function getAllPosts() {
  return posts;
}

module.exports = {
  getAllPosts,
};
