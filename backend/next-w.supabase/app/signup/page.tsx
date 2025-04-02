"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setSuccess(false);
      return;
    }

    if (data.user) {
      // 추가 정보 users 테이블에 저장
      const { error: insertError } = await supabase.from("users").insert({
        user_id: data.user.id,
        email: email,
        name,
        phone_number: phone,
      });

      if (insertError) {
        setError(insertError.message);
        setSuccess(false);
        return;
      }

      setError(null);
      setSuccess(true);
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-2 w-96 p-4">
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
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        회원가입
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-600">
          회원가입 성공! 이메일을 확인해주세요 📧
        </p>
      )}
    </form>
  );
}
