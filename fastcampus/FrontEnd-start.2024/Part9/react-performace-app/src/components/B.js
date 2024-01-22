import React from "react";

export default function B({ message, posts }) {
  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
}

const Message = ({ message }) => {
  return <p>{message}</p>;
};

const List = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post.title} />
      ))}
    </ul>
  );
};

const ListItem = ({ post }) => {
  return (
    <li key={post.id}>
      <p>{post}</p>
    </li>
  );
};
