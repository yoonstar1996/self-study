// 첫번째 케이스 (유저와 토큰이 모두 true인 경우)
const isValidUser = true;
const isValidToken = true;

if (isValidToken && isValidUser) {
  console.log("로그인 성공");
}

if (!(isValidToken && isValidUser)) {
  console.log("로그인 실패");
}

if (!isValidToken || !isValidUser) {
  console.log("로그인 실패");
}

// 두번째 케이스 (남자거나 여자거나인 경우)
const isMale = true;
const isFemale = true;

if (isMale || isFemale) {
  console.log("인증 완료");
}

if (!(isMale || isFemale)) {
  console.log("인증 실패");
}

if (!isMale && !isFemale) {
  console.log("인증 실패");
}
