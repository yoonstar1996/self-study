import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      console.log("cleanup by count", count);
    };
  }, [count]);

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
