"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState(""); // 인증 성공 시 받은 토큰
  const [isVerified, setIsVerified] = useState(false);

  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  const [status, setStatus] = useState("");

  const sendCode = async () => {
    const res = await fetch("/api/auth/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    const token = result.token; // 꼭 받아야 함
    localStorage.setItem("verify_token", token); // 또는 useState에 저장
    setStatus(result.success ? "인증코드 전송됨" : result.message);
  };

  const verifyCode = async () => {
    const token = localStorage.getItem("verify_token");
    const res = await fetch("/api/auth/verify-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });

    const result = await res.json();
    if (result.success && result.token) {
      localStorage.setItem("token", result.token);
      setToken(result.token);
      setIsVerified(true);
      setStatus("이메일 인증 성공");
    } else {
      setStatus(result.message);
    }
  };

  const handleSignup = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        nickname,
        phone,
        token,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("회원가입 성공!");
      Cookies.set("token", result.accessToken, { expires: 1 });
      router.push("/auth/login");
    } else {
      setStatus(result.message);
    }
  };

  const isReady = email && code && password && nickname && phone && isVerified;

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">회원가입</h1>

      <label className="block mb-1">이메일</label>
      <input
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={sendCode}
      >
        인증코드 전송
      </button>

      <label className="block mb-1">인증코드</label>
      <input
        className="border p-2 w-full mb-2"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={verifyCode}
      >
        인증 확인
      </button>

      <label className="block mb-1">비밀번호</label>
      <input
        type="password"
        className="border p-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="block mb-1">닉네임</label>
      <input
        className="border p-2 w-full mb-2"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <label className="block mb-1">전화번호</label>
      <input
        className="border p-2 w-full mb-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleSignup}
        disabled={!isReady}
        className="w-full py-2 bg-black text-white rounded disabled:opacity-30"
      >
        회원가입
      </button>

      <p className="mt-4 text-sm text-gray-700">{status}</p>
    </div>
  );
}
