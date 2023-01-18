import React from "react";

// useState => count
// useState => { count: 0 }
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <>
      <h2>You clicked {state.count} times</h2>
      <button onClick={click}>Click me</button>
    </>
  );

  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}
