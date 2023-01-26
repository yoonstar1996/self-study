import React from "react";

export default function Composition() {
  return (
    <>
      <div>Composition</div>
      <Welcome name="yoonstar" />
    </>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
