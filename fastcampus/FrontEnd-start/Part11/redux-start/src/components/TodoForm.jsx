import React from "react";
import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={click}>추가</button>
    </>
  );

  function click() {
    add(inputRef.current.value);
    inputRef.current.value = "";
  }
}
