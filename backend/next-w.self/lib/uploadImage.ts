import { createSupabaseWithToken } from "@/lib/supabase-auth";

export const uploadProfileImage = async (
  file: File,
  userEmail: string,
  token: string
): Promise<string> => {
  const sb = createSupabaseWithToken(token); // 🔐 토큰 포함된 supabase 클라이언트

  const fileExt = file.name.split(".").pop(); // 파일 확장자 추출
  const filePath = `profile-images/${userEmail}-${Date.now()}.${fileExt}`; // 고유 경로 생성

  const { error } = await sb.storage.from("profile").upload(filePath, file, {
    cacheControl: "3600", // 1시간 캐시
    upsert: true, // 동일 경로 파일 덮어쓰기
  });

  if (error) {
    console.error("이미지 업로드 실패:", error.message);
    return "";
  }

  const { data } = sb.storage.from("profile").getPublicUrl(filePath); // 공개 URL 가져오기
  return data.publicUrl;
};
