import { createSupabaseWithToken } from "@/lib/supabase-auth";

export const uploadProfileImage = async (
  file: File,
  userEmail: string,
  token: string
): Promise<string> => {
  const sb = createSupabaseWithToken(token);

  const fileExt = file.name.split(".").pop();
  const filePath = `profile-images/${userEmail}-${Date.now()}.${fileExt}`;

  const { error } = await sb.storage.from("profile").upload(filePath, file, {
    cacheControl: "3600",
    upsert: true,
  });

  if (error) {
    console.error("이미지 업로드 실패:", error.message);
    return "";
  }

  const { data } = sb.storage.from("profile").getPublicUrl(filePath);
  return data.publicUrl;
};
