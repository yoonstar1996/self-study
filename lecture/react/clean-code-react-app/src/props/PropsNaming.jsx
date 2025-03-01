import React from "react";

function PropsNaming() {
  return (
    <ChildComponent
      class="mt-0"
      Clean="code"
      clean_code="react"
      otherComponent={OtherComponent}
      isShow={true}
    />
  );
}

function ChildComponent({ Clean, clean_code, otherComponent }) {}

export default PropsNaming;
