import React, { useState } from "react";

const MOCK_DATA = [
  {
    userId: 1,
    id: 1,
    title: "clean",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "code",
    completed: true,
  },
  {
    userId: 3,
    id: 3,
    title: "react",
    completed: true,
  },
];

function UnnecessaryState() {
  const [userList, setuserList] = useState(MOCK_DATA);
  // const [compleUserList, setCompleUserList] = useState(MOCK_DATA);

  /**
   * 컴포넌트 내부에서의 변수는?
   * 렌더링마다 고유의 값을 가지는 계산된 값
   */
  const compleUserList = userList.filter((user) => user.completed === true);

  return (
    <div>
      {compleUserList.map((user) => (
        <div>{user.title}</div>
      ))}
    </div>
  );
}

export default UnnecessaryState;
