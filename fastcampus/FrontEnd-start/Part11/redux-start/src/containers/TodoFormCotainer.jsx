import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todos";

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback((text) => {
    dispatch(addTodo(text));
  });

  return <TodoForm add={add} />;
}
