import React from "react";

function PropsNaming() {
  return (
    <ChildComponent
      // class="mt-0"
      className="mt-0"
      // Clean="code"
      clean="code"
      // otherComponent={OtherComponent}
      OtherComponent={OtherComponent}
      // isShow={true}
      isShow
    />
  );
}

function ChildComponent({ Clean, clean_code, otherComponent }) {}

export default PropsNaming;
