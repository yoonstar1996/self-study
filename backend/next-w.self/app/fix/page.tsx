"use client";

import { uploadProfileImage } from "@/lib/uploadImage";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FixPage() {
  const { user, token, setUser } = useAuthStore();
  const router = useRouter();

  const [nickname, setNickname] = useState(user?.nickname || "");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!user || !token) return;

    setLoading(true);

    let imageUrl = user.profile_image_url || "";

    // 이미지 업로드
    if (file) {
      const uploaded = await uploadProfileImage(file, user.email, token);
      if (uploaded) {
        imageUrl = uploaded;
      }
    }

    // Supabase users 테이블 업데이트
    const { error } = await fetch("/api/auth/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: user.id,
        nickname,
        profile_image: imageUrl,
      }),
    }).then((res) => res.json());

    if (error) {
      alert("업데이트 실패");
      setLoading(false);
      return;
    }

    // Zustand에도 반영
    setUser({
      ...user,
      nickname,
      profile_image_url: imageUrl,
    });

    router.push("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">프로필 수정</h1>

      <label className="block mb-2 text-sm">닉네임</label>
      <input
        className="border p-2 w-full mb-4"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <label className="block mb-2 text-sm">프로필 이미지</label>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files?.[0]) setFile(e.target.files[0]);
        }}
      />

      <button
        onClick={handleUpdate}
        disabled={loading}
        className="mt-6 px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "변경 중..." : "변경"}
      </button>
    </div>
  );
}
