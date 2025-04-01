// app/auth/callback/page.tsx
"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthLogin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const { id: uuid, email, user_metadata } = session.user;

        // 이미 존재하는지 확인
        const { data: existingUser } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", uuid)
          .maybeSingle();

        // 없다면 insert
        if (!existingUser) {
          const { error: insertError } = await supabase.from("users").insert({
            user_id: uuid,
            email,
            name: user_metadata?.name || "무명",
          });

          if (insertError) {
            console.error("유저 insert 실패:", insertError);
          }
        }

        router.replace("/");
      }
    };

    handleOAuthLogin();
  }, [router]);

  return <p>로그인 처리 중...</p>;
}
