import { MenuListDto } from "./dto/MenuListDto";
import { MenuRepository } from "@/domain/repositories/MenuRepositories";

export class MenuListUsecase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute() {
    try {
      const menus = await this.menuRepository.findAll();

      const MenuListDto: MenuListDto = {
        menus: menus.map((menu) => ({
          id: menu.id,
          korName: menu.korName,
          engName: menu.engName,
        })),
        totalCount: menus.length,
        totalPages: 1,
        hasPreviousPage: false,
        hasNextPage: false,
        pages: [1],
      };

      return MenuListDto;
    } catch (error) {
      console.log("Error fetching menus:", error);
      throw new Error("Failed to fetch menus");
    }
  }
}
