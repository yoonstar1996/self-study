import { NextRequest, NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("myApp");

    const body = await req.json();
    const { name, email } = body;
    const { id } = params;

    const result = await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, email, updatedAt: new Date() } }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "수정할 유저가 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "수정 성공" },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT 에러:", error);
    return NextResponse.json(
      { success: false, message: "서버 에러" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("myApp");

    const { id } = params;
    const result = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "삭제할 유저가 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "삭제 성공" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE 에러:", error);
    return NextResponse.json(
      { success: false, message: "서버 에러" },
      { status: 500 }
    );
  }
}
