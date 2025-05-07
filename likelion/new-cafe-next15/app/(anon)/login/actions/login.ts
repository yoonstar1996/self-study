"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const username = formData.get("username") as string;

  const usernameCookie = await cookies();
  usernameCookie.set("username", username, {
    path: "/menus",
  });
  // usernameCookie.set("username", username, {
  //   path: "/",
  //   httpOnly: false,
  // });

  redirect("/");
};
