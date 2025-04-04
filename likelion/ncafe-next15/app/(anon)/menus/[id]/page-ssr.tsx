import { JSX } from "react";

type MenuPageParams = {
  params: {
    id: string;
  };
};

export default function MenuDetailPage({
  params,
}: MenuPageParams): JSX.Element {
  const { id } = params;

  const fetchMenuData = async () => {
    const response = await fetch(
      "https://next15-ts-ssr.new-cafe.com/api/menus",
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return response.json();
  };

  const menuData = fetchMenuData();
  console.log("menuData: ", menuData);

  return <main>상세 페이지 : {id}</main>;
}
