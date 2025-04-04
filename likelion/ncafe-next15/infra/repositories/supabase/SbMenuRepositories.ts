import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepositories";
import { createClient } from "@/utils/supabase/server";

export class SbMenuRepository implements MenuRepository {
  async findById(id: number): Promise<Menu> {
    console.log("Menu ID:", id);
    return {
      id,
      korName: "Sample Menu",
      engName: "Sample Menu",
      price: 10.99,
    };
  }

  async findAll(): Promise<Menu[]> {
    const supabase = await createClient();
    const { data } = await supabase.from("menu").select();
    const menus: Menu[] =
      data?.map((el) => ({
        id: el.id,
        korName: el.kor_name,
        engName: el.eng_name,
        price: el.price,
      })) || [];

    return menus;
  }

  async save(menu: Menu): Promise<Menu> {
    return menu;
  }
}
