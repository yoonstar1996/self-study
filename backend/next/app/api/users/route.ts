import { NextRequest, NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myApp");

    const users = await db.collection("users").find().toArray();
    return NextResponse.json(
      { success: true, data: { users } },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET 에러:", error);
    return NextResponse.json(
      { success: false, message: "서버 에러" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("myApp");

    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "이름과 이메일은 필수입니다." },
        { status: 400 }
      );
    }
    const now = new Date();
    const result = await db
      .collection("users")
      .insertOne({ name, email, createdAt: now, updatedAt: now });

    return NextResponse.json(
      {
        success: true,
        message: "유저 생성 성공",
        data: { id: result.insertedId },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST 에러:", error);
    return NextResponse.json(
      { success: false, message: "서버 에러" },
      { status: 500 }
    );
  }
}
