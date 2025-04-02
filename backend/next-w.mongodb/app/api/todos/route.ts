// app/api/todos/route.ts

import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const db = await connectDB();
  const user = await db
    .collection("users")
    .findOne({ email: session.user?.email });

  if (!user)
    return NextResponse.json({ message: "User not found" }, { status: 404 });

  const todos = await db
    .collection("todos")
    .find({ userId: new ObjectId(user._id) })
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { content } = await req.json();
  if (!content || !content.trim())
    return NextResponse.json(
      { message: "내용을 입력하세요." },
      { status: 400 }
    );

  const db = await connectDB();
  const user = await db
    .collection("users")
    .findOne({ email: session.user?.email });

  if (!user)
    return NextResponse.json({ message: "User not found" }, { status: 404 });

  await db.collection("todos").insertOne({
    userId: user._id,
    content,
    isDone: false,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "추가 완료" });
}
