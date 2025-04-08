import { NextRequest, NextResponse } from "next/server";

import { hashPassword } from "@/utils/hash";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email, password, nickname, name, phone, profileImageUrl } =
    await req.json();

  // 필수 필드 확인
  if (!email || !password || !nickname) {
    return NextResponse.json(
      { success: false, message: "필수 항목 누락" },
      { status: 400 }
    );
  }

  // 인증된 이메일인지 확인
  const { data: verification, error: verificationError } = await supabase
    .from("email_verifications")
    .select("verified")
    .eq("email", email)
    .single();

  if (verificationError || !verification?.verified) {
    return NextResponse.json(
      { success: false, message: "이메일 인증되지 않음" },
      { status: 401 }
    );
  }

  // 비밀번호 해싱
  const hashedPassword = await hashPassword(password);

  // 유저 등록
  const { error: insertError } = await supabase.from("users").insert([
    {
      email,
      password: hashedPassword,
      nickname,
      name,
      phone,
      profile_image_url: profileImageUrl,
      is_verified: true,
    },
  ]);

  if (insertError) {
    console.error(insertError.message);
    return NextResponse.json(
      { success: false, message: "회원가입 실패" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "회원가입 성공" });
}
