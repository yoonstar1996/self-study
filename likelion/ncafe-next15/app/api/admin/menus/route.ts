import { NextRequest, NextResponse } from "next/server";

import { MenuListDto } from "@/application/usecases/admin/menu/dto/MenuListDto";
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
