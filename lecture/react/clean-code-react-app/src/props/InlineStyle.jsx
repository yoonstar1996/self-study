import React from "react";

function InlineStyle() {
  return (
    <button style="background-color: 'red'; font-size:'14px';">
      Clean Code
    </button>
  );
}

function InlineStyle() {
  const myStyle = { backgroundColor: "red", fontSize: "14px" };

  return <button style={myStyle}>Clean Code</button>;
}

export default InlineStyle;
