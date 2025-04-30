import "./App.css";

import { useState } from "react";

function App() {
  const INFO = {
    name: "My Component",
    value: "Clean Code React",
  };

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main className="App-main">
        <header>{INFO}</header>
        <ShowCount info={INFO} count={count} />
        <ButtonGroup />
      </main>
    </div>
  );
}

export default App;
