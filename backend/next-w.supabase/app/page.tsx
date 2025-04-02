"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

type Todo = {
  id: number;
  user_id: string;
  content: string;
  is_done: boolean;
  created_at: string;
};

export default function Page() {
  const router = useRouter();
  const { currentUser, setUser } = useUserStore();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const fetchUserAndTodos = async () => {
      const { data: userData } = await supabase.auth.getUser();
      setUser(userData.user);
      fetchTodos();
    };

    fetchUserAndTodos();
  }, []);

  // todo 불러오기
  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setTodos(data);
  };

  // todo 추가하기
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !currentUser) return;

    const { error } = await supabase.from("todos").insert({
      user_id: currentUser.id,
      content,
      is_done: false,
    });

    if (error) console.error(error);
    else {
      setContent("");
      fetchTodos();
    }
  };

  // 로그아웃
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  const handleMyTodoList = () => {
    router.push("/todo");
  };

  // 체크박스 핸들러
  const handleToggleDone = async (todo: Todo) => {
    const { error } = await supabase
      .from("todos")
      .update({ is_done: !todo.is_done })
      .eq("id", todo.id);
    if (!error) fetchTodos();
  };

  // 수정 저장 핸들러
  const handleSaveEdit = async (todo: Todo) => {
    if (editContent.trim() !== "") {
      const { error } = await supabase
        .from("todos")
        .update({ content: editContent })
        .eq("id", todo.id);
      if (!error) {
        setEditingId(null);
        setEditContent("");
        fetchTodos();
      }
    }
  };

  // 수정 시작 핸들러
  const handleStartEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditContent(todo.content);
  };

  // 수정 취소 핸들러
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  // 삭제 핸들러
  const handleDelete = async (todo: Todo) => {
    const { error } = await supabase.from("todos").delete().eq("id", todo.id);
    if (!error) fetchTodos();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-xl font-bold">모든 사람의 To-do List</h1>
        <div className="">
          {currentUser ? (
            <>
              <button
                onClick={handleMyTodoList}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                내 Todo-List
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                로그아웃
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => router.push("/signup")}
                className="bg-fuchsia-500 text-white px-4 py-2 rounded"
              >
                회원가입
              </button>
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                로그인
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 투두 등록 폼 */}
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
        {todos.map((todo) => {
          const isMyTodo = currentUser?.id === todo.user_id;

          return (
            <li
              key={todo.id}
              className={`border px-4 py-2 rounded shadow flex justify-between items-center gap-4 ${
                isMyTodo ? "bg-yellow-50" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="checkbox"
                  checked={todo.is_done}
                  disabled={!isMyTodo}
                  onChange={() => handleToggleDone(todo)}
                />

                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  <span
                    className={todo.is_done ? "line-through text-gray-400" : ""}
                  >
                    {todo.content}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                {isMyTodo && editingId === todo.id ? (
                  <>
                    <button
                      className="text-green-600"
                      onClick={() => handleSaveEdit(todo)}
                    >
                      저장
                    </button>
                    <button
                      className="text-gray-500"
                      onClick={handleCancelEdit}
                    >
                      취소
                    </button>
                  </>
                ) : isMyTodo ? (
                  <button
                    className="text-blue-600"
                    onClick={() => handleStartEdit(todo)}
                  >
                    수정
                  </button>
                ) : null}

                {isMyTodo && (
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(todo)}
                  >
                    삭제
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
