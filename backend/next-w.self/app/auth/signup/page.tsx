"use client";

import { uploadProfileImage } from "@/lib/uploadImage";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [status, setStatus] = useState("");

  const sendCode = async () => {
    const res = await fetch("/api/auth/send-code", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    const result = await res.json();
    setStatus(result.success ? "인증코드 전송됨" : result.message);
  };

  const verifyCode = async () => {
    const res = await fetch("/api/auth/verify-code", {
      method: "POST",
      body: JSON.stringify({ email, code }),
    });
    const result = await res.json();
    if (result.success) {
      setIsVerified(true);
      setStatus("인증 성공");
    } else {
      setStatus(result.message);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); // 미리보기용
    }
  };

  const register = async () => {
    let profileImageUrl = "";
    if (imageFile) {
      const token = localStorage.getItem("token");
      profileImageUrl = await uploadProfileImage(imageFile, email, token || "");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        nickname,
        name,
        phone,
        profileImageUrl,
      }),
    });

    const result = await res.json();
    setStatus(result.success ? "회원가입 성공!" : result.message);
  };

  const isAllFilled =
    email && code && password && nickname && name && phone && isVerified;

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">회원가입</h1>

      <label className="block mb-1">이메일</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={sendCode}
      >
        인증코드 전송
      </button>

      <label className="block mb-1">인증코드</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={verifyCode}
      >
        인증 확인
      </button>

      <label className="block mb-1">비밀번호</label>
      <input
        type="password"
        className="border px-3 py-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="block mb-1">닉네임</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <label className="block mb-1">이름</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="block mb-1">전화번호</label>
      <input
        className="border px-3 py-2 w-full mb-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className="block mb-1">프로필 이미지</label>
      <input
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={handleImageChange}
      />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="preview"
          className="w-24 h-24 mb-4 rounded-full"
        />
      )}

      <div className="flex gap-2 mt-6">
        <button
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-30"
          onClick={register}
          disabled={!isAllFilled}
        >
          회원가입
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => window.history.back()}
        >
          취소
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-700">{status}</p>
    </div>
  );
}
