"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meal";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text.title || text.title.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"), // input필드의 name속성이 들어온다.
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "iInvalid input.",
    };
  }

  // console.log(meal); // 서버에 콘솔이 찍힌다.
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
