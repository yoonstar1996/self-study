import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { createRef } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  return (
    <>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
