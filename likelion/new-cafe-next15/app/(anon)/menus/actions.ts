"use server";

import { redirect } from "next/navigation";

export const toggleLike = async (formData: FormData) => {
  console.log(formData.get("menu-id"));

  redirect("/menus");
};
