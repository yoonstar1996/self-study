function handleClick1() {
  return setState(false);
}

function showAlert1(message) {
  return alert(message);
}

// 위의 코드를 아래와 같이 수정

function handleClick2() {
  setState(false);
}

function showAlert2(message) {
  alert(message);
}

// 반환 값이 있는 경우
function isAdult(age) {
  return age > 19;
}

function getUserName(name) {
  return "유저" + " " + name;
}

console.log(isAdult(20)); // true
console.log(getUserName("yoon")); // 유저 yoon
