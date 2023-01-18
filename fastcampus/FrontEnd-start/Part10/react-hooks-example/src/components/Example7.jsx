import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "mark", age: 39 },
    { name: "hanna", age: 28 },
  ]);
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>Click</button>
    </>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
