import React from "react";

function FlagState() {
  const isLogin = hasToken && hasCookie && isValidCookie;

  return <div>{isLogin && "안녕하세요! 반갑습니다."}</div>;
}

export default FlagState;
