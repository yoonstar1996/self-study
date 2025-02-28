import React, { useReducer } from "react";

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

function StateToReducer() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchData = () => {
    // fetch Data 시도
    dispatch({ type: "FETCH_LOADING" });

    fetch(url)
      .then(() => {
        // fetch Data 성공
        dispatch({ type: "FETCH_FINISH" });
      })
      .catch(() => {
        // fetch Data 실패
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  if (state.isLoading) return <LoadingComponent />;
  if (state.isError) return <ErrorComponent />;
  if (state.isFinish) return <SuccessComponent />;
}

export default StateToReducer;
