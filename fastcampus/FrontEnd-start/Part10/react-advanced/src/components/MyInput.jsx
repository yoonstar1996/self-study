import React from "react";

export default React.forwardRef(function MyInput(props, ref) {
  return (
    <>
      <p>MyInput</p>
      <input ref={ref}></input>
    </>
  );
});
