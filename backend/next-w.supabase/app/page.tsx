"use client";

import Link from "next/link";

export default function SupabaseTest() {
  return (
    <div className="p-4">
      <div>
        <Link href={"/signup"}>회원가입</Link>
      </div>
      <div>
        <Link href={"/login"}>로그인</Link>
      </div>
    </div>
  );
}
