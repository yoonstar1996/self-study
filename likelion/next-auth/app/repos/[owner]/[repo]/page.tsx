// app/repos/[owner]/[repo]/page.tsx

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getRepoCommits } from "@/lib/github";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

type Props = {
  params: {
    owner: string;
    repo: string;
  };
};

export default async function CommitsPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }

  const { owner, repo } = params;

  let commits = [];
  try {
    commits = await getRepoCommits(session.accessToken as string, owner, repo);
  } catch (e) {
    return <p>커밋을 불러오는 중 오류가 발생했습니다.</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">
        {owner}/{repo} 커밋 목록
      </h1>
      <ul className="space-y-2">
        {commits.map((c: any) => (
          <li key={c.sha}>
            <Link href={`/repos/${owner}/${repo}/commits/${c.sha}`}>
              <div className="text-green-600 hover:underline">
                {c.commit.message} — <code>{c.sha.slice(0, 7)}</code>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
