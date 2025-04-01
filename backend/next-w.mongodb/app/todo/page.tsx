"use client";

import { useEffect, useState } from "react";

import type { TodoType } from "@/types/todo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TodoPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
    } else {
      fetchTodos();
    }
  }, [status, session]);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    setContent("");
    fetchTodos();
  };

  const handleToggleDone = async (todo: TodoType) => {
    await fetch(`/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !todo.isDone }),
    });
    fetchTodos();
  };

  const handleSaveEdit = async (todo: TodoType) => {
    if (!editContent.trim()) return;
    await fetch(`/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: editContent }),
    });
    setEditingId(null);
    setEditContent("");
    fetchTodos();
  };

  const handleDelete = async (todo: TodoType) => {
    await fetch(`/api/todos/${todo._id}`, { method: "DELETE" });
    fetchTodos();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-xl font-bold">My To-do List</h1>
        <button
          onClick={() => {
            router.push("/api/auth/signout");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          로그아웃
        </button>
      </div>

      {/* 등록 폼 */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          추가
        </button>
      </form>

      {/* 투두 리스트 */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="border px-4 py-2 rounded bg-white shadow flex justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 flex-1">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleToggleDone(todo)}
              />
              {editingId === todo._id ? (
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="border p-1 rounded w-full"
                />
              ) : (
                <span
                  className={todo.isDone ? "line-through text-gray-400" : ""}
                >
                  {todo.content}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              {editingId === todo._id ? (
                <>
                  <button
                    className="text-green-600"
                    onClick={() => handleSaveEdit(todo)}
                  >
                    저장
                  </button>
                  <button
                    className="text-gray-500"
                    onClick={() => {
                      setEditingId(null);
                      setEditContent("");
                    }}
                  >
                    취소
                  </button>
                </>
              ) : (
                <button
                  className="text-blue-600"
                  onClick={() => {
                    setEditingId(todo._id);
                    setEditContent(todo.content);
                  }}
                >
                  수정
                </button>
              )}

              <button
                className="text-red-600"
                onClick={() => handleDelete(todo)}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
