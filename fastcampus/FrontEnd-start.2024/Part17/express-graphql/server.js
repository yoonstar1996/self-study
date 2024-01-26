const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { buildSchema } = require("graphql");

const app = express();
const port = 4000;

const schema = buildSchema(`
type Query {
  posts: [Post],
  comments: [Comment]
}

type Post {
  id: ID!
  title: String!
  description: String!
  comments: [Comment]
}

type Comment {
  id: ID!
  text: String!
  likes: Int
}
`);

const root = {
  posts: [
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
  ],
  comments: [
    {
      id: "comment 1",
      text: "It is a first comment",
      likes: 1,
    },
  ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${port}/graphql`
  );
});
