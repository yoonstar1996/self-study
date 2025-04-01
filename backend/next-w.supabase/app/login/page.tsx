"use client";

import { supabase } from "@/lib/supabase";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    } else {
      setError(null);
      router.push("/");
    }
  };

  const handleSocialLogin = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2 w-96 p-4">
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
        로그인
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        className="bg-red-500 text-white py-2 rounded"
      >
        Google로 로그인
      </button>

      <button
        onClick={() => handleSocialLogin("kakao")}
        className="bg-yellow-400 text-black py-2 rounded"
      >
        Kakao로 로그인
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
