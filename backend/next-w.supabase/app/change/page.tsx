"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("비밀번호가 서로 다릅니다.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) setError(error.message);
    else router.push("/");
  };

  return (
    <form
      onSubmit={handleChangePassword}
      className="flex flex-col gap-3 w-96 p-4"
    >
      <h2 className="text-xl font-bold">새 비밀번호 설정</h2>
      <input
        type="password"
        placeholder="새 비밀번호"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded"
        disabled={!newPassword || !confirmPassword}
      >
        비밀번호 변경하기
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
