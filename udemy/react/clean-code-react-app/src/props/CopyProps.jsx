import React, { useMemo } from "react";

function CopyProps({ value }) {
  const copyValue = useMemo(() => 값비싸고_무거운_연산(value), [value]);

  return <div>{copyValue}</div>;
}

export default CopyProps;
