import React, { useState } from "react";

function PrevState() {
  const [age, setAge] = useState(42);

  function updateState() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
  }

  function updaterFunction() {
    setAge((prev) => prev + 1); // setAge(42 => 43)
    setAge((prev) => prev + 1); // setAge(43 => 44)
    setAge((prev) => prev + 1); // setAge(44 => 45)
  }

  return <div>{age}</div>;
}

export default PrevState;
