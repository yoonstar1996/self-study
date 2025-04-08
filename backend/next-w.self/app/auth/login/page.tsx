"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const login = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (!result.success) {
      setStatus(result.message || "로그인 실패");
      return;
    }

    const token = result.token;
    setToken(token);
    localStorage.setItem("token", token);

    // 유저 정보 불러오기
    const me = await fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("token", token);
    const user = await me.json();
    setUser(user);

    setStatus("로그인 성공!");
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>

      <label className="block mb-1">이메일</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-1">비밀번호</label>
      <input
        type="password"
        className="border px-3 py-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={login}
      >
        로그인
      </button>

      <p className="mt-4 text-sm text-gray-700">{status}</p>
    </div>
  );
}
