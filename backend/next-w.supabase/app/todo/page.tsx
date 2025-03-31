// app/todo/page.tsx

"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Todo = {
  id: string;
  content: string;
  is_done: boolean;
  created_at: string;
};

export default function Page() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // ✅ 로그아웃
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  // ✅ To-do 불러오기 (Read)
  const fetchTodos = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setTodos(data);
  };

  // ✅ To-do 등록 (Create)
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("todos").insert({
      user_id: user?.id,
      content,
      is_done: false,
    });

    if (error) console.error(error);
    setContent("");
    fetchTodos(); // 다시 목록 불러오기
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-xl font-bold">My To-do List</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          로그아웃
        </button>
      </div>

      {/* 📋 투두 등록 폼 */}
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

      {/* 📄 등록된 투두 리스트 */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border px-4 py-2 rounded bg-white shadow"
          >
            {todo.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
