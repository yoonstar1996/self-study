function register1() {
  const isConfirm = confirm("회원가입에 성공했습니다.");

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

function login1() {
  const isConfirm = confirm("로그인에 성공했습니다.");

  if (isConfirm) {
    redirectIndexPage();
  }
}

// 위의 코드를 리팩터링하기

function confirmModal(message, cbFunc) {
  const isConfirm = confirm(message);

  if (isConfirm && cbFunc) {
    cbFunc();
  }
}

function register2() {
  confirmModal("회원가입에 성공했습니다.", redirectUserInfoPage);
}

function login2() {
  confirmModal("로그인에 성공했습니다.", redirectIndexPage);
}
