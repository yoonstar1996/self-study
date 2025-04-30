import React, { useEffect, useReducer } from "react";

const INIT_STATE = {
  isLoading: false,
  isFinish: false,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { isLoading: true, isFinish: false, isError: false };

    case "FETCH_FINISH":
      return { isLoading: false, isFinish: true, isError: false };

    case "FETCH_ERROR":
      return { isLoading: false, isFinish: false, isError: true };

    default:
      return INIT_STATE;
  }
};

const useFetchData = (url) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    const fetchData = async () => {
      // fetch Data 시도
      dispatch({ type: "FETCH_LOADING" });

      await fetch(url)
        .then(() => {
          // fetch Data 성공
          dispatch({ type: "FETCH_FINISH" });
        })
        .catch(() => {
          // fetch Data 실패
          dispatch({ type: "FETCH_ERROR" });
        });
    };
    fetchData();
  }, [url]);

  return state;
};

function CustomHooks() {
  const { isLoading, isError, isFinish } = useFetchData("url");

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent />;
  if (isFinish) return <SuccessComponent />;
}

export default CustomHooks;
