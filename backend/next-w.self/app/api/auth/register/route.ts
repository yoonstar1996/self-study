import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";
import { hashPassword } from "@/utils/hash";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { token, password, nickname, name, phone, profileImageUrl } =
    await req.json();

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    const email = decoded.email;

    const hashedPassword = await hashPassword(password);

    const { error } = await supabase.from("users").insert([
      {
        email,
        password: hashedPassword,
        nickname,
        name,
        phone,
        profile_image_url: profileImageUrl,
      },
    ]);

    if (error) {
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
