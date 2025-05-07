// app/repos/[owner]/[repo]/pulls/page.tsx

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getRepoPRs } from "@/lib/github";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

type Props = { params: { owner: string; repo: string } };

export default async function PullsPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return <p>로그인이 필요합니다.</p>;

  const { owner, repo } = params;
  console.log("params: ", params);

  const pulls = await getRepoPRs(
    session.accessToken as string,
    owner,
    repo,
    "all"
  );
  console.log("pulls: ", pulls);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {owner}/{repo} PR 목록
      </h1>
      <ul className="space-y-2">
        {pulls.map((pr: any) => (
          <li key={pr.number}>
            <Link
              href={`/repos/${owner}/${repo}/pulls/${pr.number}`}
              className="text-blue-600 hover:underline"
            >
              #{pr.number} {pr.title} ({pr.state})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
