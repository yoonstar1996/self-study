function getUserType1(type) {
  if (type === "ADMIN") {
    return "관리자";
  } else if (type === "INSTRUCTOR") {
    return "강사";
  } else if (type === "STUDENT") {
    return "학생";
  } else {
    return "해당 없음";
  }
}

// if문이 계속 늘어질 경우 switch문으로 작성하자

function getUserType2(type) {
  switch (type) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "학생";
    default:
      return "해당 없음";
  }
}

// 위의 코드를 아래와 같이 변경
// 가장 바람직한 모습
function getUserType3(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "학생",
    UNDEFINED: "해당없음",
  };
  return USER_TYPE[type] || USER_TYPE[USER_TYPE.UNDEFINED];
}

// 더 짧게도 가능

function getUserType4(type) {
  return (
    {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "학생",
      UNDEFINED: "해당없음",
    }[type] || "해당없음"
  );
}
