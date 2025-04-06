import { NextRequest, NextResponse } from "next/server";

import { MenuListDto } from "@/application/usecases/admin/menu/dto/MenuListDto";
import { MenuCreateUsecase } from "@/application/usecases/admin/menu/MenuCreateUsecase";
import { MenuListUsecase } from "@/application/usecases/admin/menu/MenuListUsecase";
import { SbMenuRepository } from "@/infra/repositories/supabase/SbMenuRepositories";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("p");
    console.log("page: ", page);

    const menuRepository = new SbMenuRepository();
    const menuListUsecase = new MenuListUsecase(menuRepository);
    const menuListDto: MenuListDto = await menuListUsecase.execute();

    return NextResponse.json(menuListDto, { status: 200 });
  } catch (error) {
    console.log("Error fetching menus: ", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { korName, engName, price } = await req.json();

    const repo = new SbMenuRepository();
    const usecase = new MenuCreateUsecase(repo);

    await usecase.execute({ korName, engName, price });

    return NextResponse.json({ message: "메뉴 등록 성공!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "오류 발생" }, { status: 500 });
  }
}
