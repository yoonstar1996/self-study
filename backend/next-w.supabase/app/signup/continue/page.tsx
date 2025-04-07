"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ContinueSignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setMessage("로그인이 확인되지 않았습니다.");
        return;
      }

      setUserId(user.id);
      setEmail(user.email);
    };

    getUser();
  }, []);

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!userId || !email) {
      setError("사용자 인증 정보가 없습니다.");
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setError("이름과 전화번호를 모두 입력해주세요.");
      return;
    }

    const { error: insertError } = await supabase.from("users").insert({
      user_id: userId,
      email,
      name,
      phone_number: phone,
      provider: "email",
    });

    if (insertError) {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    } else {
      setMessage("회원가입이 완료되었습니다!");
      router.replace("/");
    }
  };

  return (
    <div className="p-4 w-96 mx-auto">
      <h1 className="text-xl font-bold mb-4">회원가입을 완료해주세요</h1>
      <form onSubmit={handleComplete} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded disabled:opacity-50"
          disabled={!name.trim() || !phone.trim()}
        >
          회원가입 완료
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
