import { JSX } from "react";

type MenuPageParams = {
  params: {
    id: string;
  };
};

export default async function MenuDetailPage({
  params,
}: MenuPageParams): Promise<JSX.Element> {
  const { id } = await params;

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

  const data = await fetchMenuData();
  console.log("data: ", data);

  return (
    <main>
      <h1>상세 페이지 : {id}</h1>
      <div>
        {data.menus.map((menu) => (
          <div key={menu.id}>{menu.korName}</div>
        ))}
      </div>
    </main>
  );
}
