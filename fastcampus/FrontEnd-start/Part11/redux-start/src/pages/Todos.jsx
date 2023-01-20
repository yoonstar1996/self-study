import React from "react";
import TodoListContainer from "../containers/TodoListContainer";
import TodoFormContainer from "../containers/TodoFormCotainer";

export default function Todos() {
  return (
    <>
      <TodoListContainer />
      <TodoFormContainer />
    </>
  );
}
