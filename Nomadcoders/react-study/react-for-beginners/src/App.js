import { useState, useEffect } from "react";
// import TodoList from "./TodoList";
// import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => {
//     setCounter((prev) => prev + 1);
//   };
//   const onChange = (e) => {
//     setKeyword(e.target.value);
//   };
//   const iRunOnlyOnce = () => {
//     console.log("i run only once.");
//   };
//   useEffect(iRunOnlyOnce, []);
//   useEffect(() => {
//     console.log("i run when 'keyword' changes");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'counter' changes");
//   }, [counter]);
//   return (
//     <>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </>
//   );
// }
// export default App;

import React from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("hi :)");
//     return () => {
//       console.log("bye :(");
//     };
//   }, []);
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export default function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => {
//     setShowing((prev) => !prev);
//   };
//   return (
//     <>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      {/* <TodoList /> */}
      {/* <CoinTracker /> */}
      <MovieApp />
    </>
  );
}
