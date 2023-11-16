import React from "react";

export default function Layout(props: any) {
  return (
    <>
      <div>Create Layouts</div>
      <div>{props.children}</div>
    </>
  );
}
