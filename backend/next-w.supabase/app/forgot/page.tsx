"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/change",
    });

    if (error) setError(error.message);
    else setMessage("비밀번호 재설정 메일이 전송되었습니다.");
  };

  return (
    <form
      onSubmit={handleResetPassword}
      className="flex flex-col gap-3 w-96 p-4"
    >
      <h2 className="text-xl font-bold">비밀번호 찾기</h2>
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        비밀번호 재설정 메일 보내기
      </button>
      {message && <p className="text-green-600 text-sm">{message}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
