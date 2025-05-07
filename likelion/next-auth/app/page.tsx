// app/page.tsx
"use client"; // 클라이언트 컴포넌트로 렌더링

import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log("app/page session: ", session);

  if (status === "loading") {
    return <div>로딩 중...</div>;
  }

  return (
    <main className="p-8">
      {session ? (
        <>
          <p>안녕하세요, {session.user?.name}님!</p>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            로그아웃
          </button>
          <div className="mt-6">
            <Link href="/repos">
              <div className="text-blue-600 underline">
                내 레포지토리 보기 →
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>GitHub 계정으로 로그인 해주세요.</p>
          <button
            onClick={() => signIn("github")}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            GitHub로 로그인
          </button>
        </>
      )}
    </main>
  );
}
