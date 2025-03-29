"use client";

import { createUser, deleteUser, fetchUsers, updateUser } from "@/lib/users";
import { useEffect, useState } from "react";

import { User } from "@/type/User";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 수정 중인 유저의 id
  const [editId, setEditId] = useState<number | null>(null);

  const handleFetchUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  const handleSubmit = async () => {
    if (!name || !email) return;

    if (editId !== null) {
      await updateUser(editId, name, email);
    } else {
      await createUser(name, email);
    }

    setName("");
    setEmail("");
    setEditId(null);
    fetchUsers();
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">유저 목록</h1>

      <div className="mb-4 space-x-2">
        <input
          className="border p-1"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-1"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1"
          onClick={handleSubmit}
        >
          {editId !== null ? "저장" : "추가"}
        </button>
        {editId !== null && (
          <button
            onClick={() => {
              setName("");
              setEmail("");
              setEditId(null);
            }}
            className="ml-2 text-gray-500"
          >
            취소
          </button>
        )}
      </div>

      <ul className="space-y-1">
        {users.map((user: User) => (
          <li key={user.id} className="flex justify-between border-b py-1">
            <span>
              {user.name} ({user.email})
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="text-blue-500"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
