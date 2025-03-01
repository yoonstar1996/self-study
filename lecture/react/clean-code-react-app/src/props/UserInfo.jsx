import React from "react";

function UserInfo({ avatarImgUrl, userName, email }) {
  return (
    <div>
      <img src={avatarImgUrl} />
      <h3>{userName}</h3>
      <h4>{email}</h4>
    </div>
  );
}

export default UserInfo;
