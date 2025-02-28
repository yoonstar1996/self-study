import React, { useEffect, useRef } from "react";

function RefInsteadOfState() {
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current === true;

    return () => isMount.current === false;
  }, []);

  return <div>{isMount && "컴포넌트 마운트 완료!"}</div>;
}

export default RefInsteadOfState;
