import { create } from "zustand";

export const useStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  addTodo: (newTodo) =>
    set((state) => {
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  deleteTodo: (id) =>
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  toggleCompleted: (id) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  toggleEditing: (id) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  editTodo: (id, task) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
}));
