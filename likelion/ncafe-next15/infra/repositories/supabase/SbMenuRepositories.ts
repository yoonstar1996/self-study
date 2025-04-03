import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepositories";

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
    return [
      {
        id: 1,
        korName: "Sample Menu",
        engName: "Sample Menu",
        price: 10.99,
      },
    ];
  }

  async save(menu: Menu): Promise<Menu> {
    return menu;
  }
}
