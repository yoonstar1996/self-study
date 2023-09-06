import React from "react";

export default function NoSSR() {
  return <div>width: {window.innerWidth}</div>;
}
