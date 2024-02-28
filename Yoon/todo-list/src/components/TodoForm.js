import React, { useState } from "react";
import { useStore } from "./store";

export const TodoForm = () => {
  const { addTodo } = useStore();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      task: value,
      completed: false,
      isEditing: false,
    });
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="목표 적기"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
