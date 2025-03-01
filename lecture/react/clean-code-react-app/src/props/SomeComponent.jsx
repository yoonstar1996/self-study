import React, { useMemo, useState } from "react";

function SomeComponent({ heavyState }) {
  const [propArr, setPropArr] = useState(["hello", "world"]);

  const computedState = useMemo(
    () => ({
      heavyState: heavyState,
    }),
    [heavyState]
  );

  return (
    <ChildComponent
      hello="world"
      hello2={propArr[0]}
      computedState={computedState}
    />
  );
}

export default SomeComponent;
