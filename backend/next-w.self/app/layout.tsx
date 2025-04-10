"use client";

import "./globals.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex  gap-3 mb-3 text-xl">
          <Link href={"/"}>홈</Link>
          <Link href={"/auth/login"}>로그인</Link>
          <Link href={"/auth/signup"}>회원가입</Link>
          <Link href={"/fix"}>수정</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
