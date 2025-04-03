import { MenuRepository } from "@/domain/repositories/MenuRepositories";

export class MenuListUsecase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute() {
    try {
      const menus = await this.menuRepository.findAll();
      return menus;
    } catch (error) {
      console.log("Error fetching menus:", error);
      throw new Error("Failed to fetch menus");
    }
  }
}
