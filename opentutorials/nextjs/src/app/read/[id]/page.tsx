import React from "react";

export default function Read(props: any) {
  return (
    <>
      <div>Read Page</div>
      <div>parameters : {props.params.id}</div>
    </>
  );
}
