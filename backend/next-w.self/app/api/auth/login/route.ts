import { NextRequest, NextResponse } from "next/server";

import { comparePassword } from "@/utils/hash";
import { signToken } from "@/lib/jwt";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "입력값 없음" },
      { status: 400 }
    );
  }

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    return NextResponse.json(
      { success: false, message: "존재하지 않는 계정" },
      { status: 404 }
    );
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { success: false, message: "비밀번호 불일치" },
      { status: 401 }
    );
  }

  const token = signToken({ id: user.id, email: user.email });

  const response = NextResponse.json({ success: true });

  // 서버에서 쿠키로 토큰 설정 (HttpOnly 권장)
  response.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1일
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
