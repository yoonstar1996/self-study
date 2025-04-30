import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@/lib/mailer";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { success: false, message: "이메일이 필요합니다." },
      { status: 400 }
    );
  }

  // 인증 코드 생성
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // 토큰 생성 (5분 유효)
  const token = jwt.sign({ email, code }, JWT_SECRET, { expiresIn: "5m" });

  // 메일 발송
  try {
    await sendVerificationEmail(email, code);
    return NextResponse.json({ success: true, token });
  } catch (error) {
    console.error("메일 전송 실패:", error);
    return NextResponse.json(
      { success: false, message: "메일 전송 실패" },
      { status: 500 }
    );
  }
}
