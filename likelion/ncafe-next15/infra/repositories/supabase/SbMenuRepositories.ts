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
      data?.map(
        (el: {
          id: number;
          kor_name: string;
          eng_name: string;
          price: number;
        }) => ({
          id: el.id,
          korName: el.kor_name,
          engName: el.eng_name,
          price: el.price,
        })
      ) || [];

    return menus;
  }

  async save(menu: Menu): Promise<Menu> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("menu")
      .insert({
        kor_name: menu.korName,
        eng_name: menu.engName,
        price: menu.price,
      })
      .select()
      .single();

    if (error) {
      console.error("메뉴 저장 실패", error);
      throw new Error("메뉴 저장에 실패했습니다.");
    }

    return {
      id: data.id,
      korName: data.kor_name,
      engName: data.eng_name,
      price: data.price,
    };
  }
}
