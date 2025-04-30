import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const code = (await req.json()).code;

  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: "토큰 없음" },
      { status: 401 }
    );
  }

  try {
    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET) as {
      email: string;
      code: string;
    };

    if (decoded.code !== code) {
      return NextResponse.json(
        { success: false, message: "코드 불일치" },
        { status: 401 }
      );
    }

    // 검증 성공 → 새 토큰 발급 (email만 포함)
    const verifiedToken = jwt.sign({ email: decoded.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    return NextResponse.json({ success: true, token: verifiedToken });
  } catch {
    return NextResponse.json(
      { success: false, message: "토큰 오류" },
      { status: 401 }
    );
  }
}
