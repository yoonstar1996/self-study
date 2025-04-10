"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<null | {
    id: string;
    email: string;
    nickname?: string;
  }>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) {
          // 로그인 안 한 경우: 조용히 넘어감
          setUser(null);
          return;
        }

        const userData = await res.json();
        console.log("userData: ", userData);
        setUser(userData);
      } catch (err) {
        // 네트워크 오류나 예외 상황만 로그 출력
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Users</h1>
      {user ? (
        <div className="mt-4 text-gray-700">
          <p>👤 {user.nickname || user.email}</p>
          <button
            onClick={logout}
            className="text-sm text-red-500 underline ml-2"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-400 mt-2">로그인 필요</p>
      )}
    </div>
  );
}
