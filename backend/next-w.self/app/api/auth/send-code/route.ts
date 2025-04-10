import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@/lib/mailer";
import { supabase } from "@/lib/supabase";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { success: false, message: "이메일이 없습니다." },
      { status: 400 }
    );
  }

  // 이미 가입된 유저인지 확인
  const { data: existingUser, error } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error("유저 조회 실패:", error.message);
    return NextResponse.json(
      { success: false, message: "서버 오류" },
      { status: 500 }
    );
  }

  if (existingUser) {
    return NextResponse.json(
      { success: false, message: "이미 가입된 이메일입니다." },
      { status: 400 }
    );
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await sendVerificationEmail(email, code);

    const token = jwt.sign({ email, code }, JWT_SECRET, { expiresIn: "5m" });

    return NextResponse.json({ success: true, token });
  } catch (err) {
    console.error("메일 전송 실패:", err);
    return NextResponse.json(
      { success: false, message: "메일 전송 실패" },
      { status: 500 }
    );
  }
}
