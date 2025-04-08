"use client";

import { useAuthStore } from "@/store/authStore";

export default function Page() {
  const { user, logout } = useAuthStore();
  console.log("user: ", user);
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      {user && (
        <>
          <span className="ml-4 text-sm text-gray-600">
            {user.nickname || user.email} 님
          </span>
          <button
            className="text-red-500 text-sm underline"
            onClick={() => {
              logout();
              window.location.href = "/";
            }}
          >
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}
