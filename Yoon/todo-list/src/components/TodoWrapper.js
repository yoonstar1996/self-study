import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useStore } from "./store";

export const TodoWrapper = () => {
  const { todos } = useStore();
  return (
    <div className="TodoWrapper">
      <h1>오늘의 할 일 목록</h1>
      <TodoForm />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};
