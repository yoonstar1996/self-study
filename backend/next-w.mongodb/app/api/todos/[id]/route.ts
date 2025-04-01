// app/api/todos/[id]/route.ts

import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { content, isDone } = await req.json();
  const db = await connectDB();

  const updateFields: Partial<{ content: string; isDone: boolean }> = {};
  if (content !== undefined) updateFields.content = content;
  if (isDone !== undefined) updateFields.isDone = isDone;

  await db
    .collection("todos")
    .updateOne({ _id: new ObjectId(params.id) }, { $set: updateFields });

  return NextResponse.json({ message: "업데이트 완료" });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const db = await connectDB();
  await db.collection("todos").deleteOne({ _id: new ObjectId(params.id) });

  return NextResponse.json({ message: "삭제 완료" });
}
