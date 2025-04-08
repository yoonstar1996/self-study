import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();

  if (!email || !code) {
    return NextResponse.json(
      { success: false, message: "이메일과 코드가 필요합니다." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("email_verifications")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { success: false, message: "인증 정보가 없습니다." },
      { status: 400 }
    );
  }

  if (data.verified) {
    return NextResponse.json({
      success: true,
      message: "이미 인증된 이메일입니다.",
    });
  }

  const now = new Date();
  const expires = new Date(data.expires_at);

  if (data.code !== code) {
    return NextResponse.json(
      { success: false, message: "인증 코드가 일치하지 않습니다." },
      { status: 401 }
    );
  }

  if (now > expires) {
    return NextResponse.json(
      { success: false, message: "인증 코드가 만료되었습니다." },
      { status: 410 }
    );
  }

  // 인증 성공 → verified 업데이트
  const { error: updateError } = await supabase
    .from("email_verifications")
    .update({ verified: true })
    .eq("email", email);

  if (updateError) {
    return NextResponse.json(
      { success: false, message: "인증 상태 업데이트 실패" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "이메일 인증 성공" });
}
