import React from "react";

export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <>
      <h2>Profile 페이지입니다.</h2>
      {id && <p>id는 {id}입니다.</p>}
    </>
  );
}
