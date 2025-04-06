import { Menu } from "@/domain/entities/Menu";
import { MenuRepository } from "@/domain/repositories/MenuRepositories";
import { MenuCreateDto } from "./dto/MenuCreateDto";

export class MenuCreateUsecase {
  constructor(private readonly menuRepo: MenuRepository) {}

  async execute(dto: MenuCreateDto): Promise<Menu> {
    const newMenu = new Menu(null, dto.korName, dto.engName, dto.price);

    const savedMenu = await this.menuRepo.save(newMenu);

    return savedMenu;
  }
}
