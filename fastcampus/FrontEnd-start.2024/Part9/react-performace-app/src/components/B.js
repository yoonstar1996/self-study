import React, { useCallback } from "react";

export default function B({ message, posts }) {
  console.log("B Component is Rendering");
  const testF = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} testF={testF} />
    </div>
  );
}

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const List = React.memo(({ posts, testF }) => {
  console.log("List Component is Rendering");
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post.title} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post}</p>
    </li>
  );
});
