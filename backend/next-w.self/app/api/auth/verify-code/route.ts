import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  const auth = req.headers.get("authorization");
  const token = auth?.replace("Bearer ", "");

  if (!token || !code) {
    return NextResponse.json(
      { success: false, message: "토큰과 인증 코드가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as {
      email: string;
      code: string;
    };

    if (payload.code !== code) {
      return NextResponse.json(
        { success: false, message: "인증 코드가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    // 인증 성공 시 이메일만 담긴 새 토큰 재발급 (회원가입용)
    const verifiedToken = jwt.sign({ email: payload.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    return NextResponse.json({ success: true, token: verifiedToken });
  } catch (err) {
    console.error("JWT 인증 오류:", err);
    return NextResponse.json(
      { success: false, message: "토큰이 유효하지 않거나 만료되었습니다." },
      { status: 401 }
    );
  }
}
