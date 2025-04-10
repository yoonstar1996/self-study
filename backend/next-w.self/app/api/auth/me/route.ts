import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "토큰 없음" }, { status: 401 });
  }

  try {
    const payload = verifyToken(token); // id, email 등 추출
    const { id } = payload as { id: string };

    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, nickname, phone, provider")
      .eq("id", id)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "유저 없음" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: "토큰 오류" }, { status: 401 });
  }
}
