// app/repos/page.tsx

import { getUserRepos } from "@/lib/github";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ReposPage() {
  // 1) 서버 사이드에서 세션을 가져옴
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }

  // 2) GitHub API 호출 (내가 소유한 저장소만 가져오도록 type=owner 옵션도 추가 가능)
  const repos = await getUserRepos(session.accessToken as string);
  console.log("repos: ", repos);

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">내 레포지토리</h1>
      <ul className="space-y-2">
        {repos.map((repo: any) => (
          <li key={repo.id}>
            {/* owner.login 과 repo.name 을 함께 넘깁니다 */}
            <Link href={`/repos/${repo.owner.login}/${repo.name}`}>
              <div className="text-blue-600 hover:underline">
                {repo.owner.login}/{repo.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
