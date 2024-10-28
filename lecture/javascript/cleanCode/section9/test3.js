function React() {
  // 생성자를 사용하길 바랄때
  if (!new.target) {
    throw new Error("생성자입니다!");
  }
}

React(); // Error: 생성자입니다!!
