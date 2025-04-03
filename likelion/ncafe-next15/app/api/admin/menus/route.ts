import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menuListUsecase = ;

    return NextResponse.json(menus, { status: 200 });
  } catch (error) {
    console.log("Error fetching menus: ", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
