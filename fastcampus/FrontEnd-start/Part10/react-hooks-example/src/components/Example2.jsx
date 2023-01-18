import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h2>You clicked {count} times</h2>
      <button onClick={click}>Click me</button>
    </>
  );

  function click() {
    setCount(count + 1);
  }
}
