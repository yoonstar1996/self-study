import React from "react";
import "./Alert.css";

export default function Alert({ type, text }) {
  return (
    <>
      <div className={`alert alert-${type}`}>{text}</div>
    </>
  );
}
