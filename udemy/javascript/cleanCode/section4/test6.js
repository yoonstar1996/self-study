function loginService(isLogin, user) {
  // 로그인 여부
  if (!isLogin) {
    // 토큰 존재
    if (checkToken()) {
      // 기존 가입 유저인지 확인
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

//

function loginService(isLogin, user) {
  // Early Return
  // 함수를 미리 종료
  // 사고하기 편하다.
  if (!isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();

  return "로그인 성공";
}
