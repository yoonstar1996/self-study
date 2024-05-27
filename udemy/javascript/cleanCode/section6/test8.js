const model = {
  isLogin: false,
  isValidToken: false,
};

// model에 직접 접근X
function login() {
  setLogin(true);
  setValidToken(true);
}

// 해당 코드를 위의 코드로 수정하는 것이 좋다.
function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

// model에 대신 접근
function setLogin(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isLogin);
}

// model에 대신 접근
function setValidToken(bool) {
  model.isValidToken = bool;
  serverAPI.log(model.isValidToken);
}
