import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "토큰 없음" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded || typeof decoded !== "object" || !("id" in decoded)) {
    return NextResponse.json({ message: "토큰 검증 실패" }, { status: 401 });
  }

  const { data: user, error } = await supabase
    .from("users")
    .select("id, email, nickname, profile_image_url")
    .eq("id", decoded.id)
    .single();

  if (error || !user) {
    return NextResponse.json({ message: "유저 정보 없음" }, { status: 404 });
  }

  return NextResponse.json(user);
}
