import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "./store";

export const Todo = ({ task }) => {
  const { deleteTodo, toggleCompleted, toggleEditing, editTodo } = useStore();
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(task.task);
  }, [task.isEditing]);

  return (
    <div className="Todo">
      {task.isEditing ? (
        <input
          type="text"
          className="Edit-mode"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      ) : (
        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleCompleted(task.id)}
        >
          {task.task}
        </p>
      )}

      <div>
        {task.isEditing ? (
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPencil}
            onClick={() => editTodo(task.id, value)}
          />
        ) : (
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => toggleEditing(task.id)}
          />
        )}

        {!task.isEditing && (
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => deleteTodo(task.id)}
          />
        )}
      </div>
    </div>
  );
};
