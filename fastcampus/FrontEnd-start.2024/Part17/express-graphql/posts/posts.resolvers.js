const postModel = require("./posts.model");

module.exports = {
  Query: {
    posts: () => {
      return postModel.getAllPosts();
    },
  },
};
