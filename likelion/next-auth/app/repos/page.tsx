// app/repos/page.tsx

import { getOrgRepos, getUserRepos } from "@/lib/github";

import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ReposPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }
  const token = session.accessToken as string;

  // 1) 내 저장소 + 협업/조직 멤버 저장소
  const userRepos = await getUserRepos(token);
  // 2) 특정 조직의 저장소 (여러 조직이 있으면 배열로 반복 호출)
  const orgName = "FRONT-END-BOOTCAMP-PLUS-4";
  const orgRepos = await getOrgRepos(token, orgName);

  // 3) 중복 제거 후 병합
  const all = [
    ...userRepos,
    ...orgRepos.filter(
      (r: any) => !userRepos.some((ur: any) => ur.full_name === r.full_name)
    ),
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">내 레포지토리</h1>
      <ul className="space-y-2">
        {all.map((repo: any) => (
          <li key={repo.id}>
            <Link
              href={`/repos/${repo.owner.login}/${repo.name}`}
              className="text-blue-600 hover:underline"
            >
              {repo.owner.login}/{repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
