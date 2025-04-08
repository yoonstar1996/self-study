import { NextRequest, NextResponse } from "next/server";

import { sendVerificationEmail } from "@/lib/mailer";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { success: false, message: "이메일이 없습니다." },
      { status: 400 }
    );
  }

  // 6자리 랜덤 숫자
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // 유효 시간: 현재 시점 + 5분
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

  // Supabase에 저장 (upsert)
  const { error } = await supabase.from("email_verifications").upsert(
    {
      email,
      code,
      expires_at: expiresAt,
      verified: false,
    },
    { onConflict: "email" }
  );

  if (error) {
    console.error("DB 저장 실패:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  // 이메일 전송
  try {
    // 인증 코드 보내기 전에 추가
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "이미 가입된 이메일입니다." },
        { status: 400 }
      );
    } else {
      await sendVerificationEmail(email, code);
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    console.error("메일 전송 실패:", err);
    return NextResponse.json(
      { success: false, message: "메일 전송 실패" },
      { status: 500 }
    );
  }
}
