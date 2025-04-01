"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
      router.push("/login");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-96 p-4 mx-auto"
    >
      <input
        name="name"
        type="text"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="phone"
        type="text"
        placeholder="전화번호"
        value={form.phone}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        회원가입
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-600">회원가입 성공! 로그인해주세요 🎉</p>
      )}
    </form>
  );
}
