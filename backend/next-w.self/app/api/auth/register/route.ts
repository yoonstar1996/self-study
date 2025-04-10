import { NextRequest, NextResponse } from "next/server";

import { hashPassword } from "@/utils/hash";
import jwt from "jsonwebtoken";
import { supabase } from "@/lib/supabase";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { token, password, nickname, phone } = await req.json();

  if (!token || !password || !nickname || !phone) {
    return NextResponse.json(
      { success: false, message: "필수 정보 누락" },
      { status: 400 }
    );
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    const email = decoded.email;

    const hashedPassword = await hashPassword(password);

    const { error } = await supabase.from("users").insert([
      {
        email,
        password: hashedPassword,
        nickname,
        phone,
      },
    ]);

    if (error) {
      console.error("회원가입 실패:", error.message);
      return NextResponse.json(
        { success: false, message: "회원가입 실패" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "토큰 검증 실패" },
      { status: 401 }
    );
  }
}
