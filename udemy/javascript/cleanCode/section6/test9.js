const response = {
  data: {
    userList: [
      {
        name: "yoon",
        info: {
          tel: "010",
          email: "yagobo1110@naver.com",
        },
      },
    ],
  },
};

function getUserEmailByIndex1(userIndex) {
  if (response.data) {
    if (response.data.userList) {
      if (response.data.userList[userIndex]) {
        return response.data.userList[userIndex].info.email;
      }
    }
  }
  return "알 수 없는 에러가 발생했습니다.";
}

getUserEmailByIndex1(0); // yagobo1110@naver.com

function getUserEmailByIndex2(userIndex) {
  if (
    response.data &&
    response.data.userList &&
    response.data.userList[userIndex]
  ) {
    return response.data.userList[userIndex].info.email;
  }
  return "알 수 없는 에러가 발생했습니다.";
}

// 위 코드를 아래와 같이 수정 가능

function getUserEmailByIndex3(userIndex) {
  if (response?.data?.userList?.[userIndex]?.info?.email) {
    return response.data.userList[userIndex].info.email;
  }
  return "알 수 없는 에러가 발생했습니다.";
}
