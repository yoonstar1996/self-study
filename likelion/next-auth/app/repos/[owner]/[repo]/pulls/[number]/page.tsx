// app/repos/[owner]/[repo]/pulls/[number]/page.tsx

import { getPRComments, getPRDetail, getPRReviews } from "@/lib/github";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

type Props = { params: { owner: string; repo: string; number: string } };

export default async function PullDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return <p>로그인이 필요합니다.</p>;

  const owner = params.owner;
  const repo = params.repo;
  const num = parseInt(params.number, 10);

  const pr = await getPRDetail(session.accessToken as string, owner, repo, num);
  const comments = await getPRComments(
    session.accessToken as string,
    owner,
    repo,
    num
  );
  const reviews = await getPRReviews(
    session.accessToken as string,
    owner,
    repo,
    num
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">
        #{pr.number} {pr.title}
      </h1>
      <p className="mb-4">{pr.body}</p>
      <section className="mb-6">
        <h2 className="font-semibold mb-2">Comments</h2>
        {comments.map((c: any) => (
          <div key={c.id} className="border p-2 mb-2">
            <strong>{c.user.login}</strong>: {c.body}
          </div>
        ))}
      </section>
      <section>
        <h2 className="font-semibold mb-2">Reviews</h2>
        {reviews.map((r: any) => (
          <div key={r.id} className="border p-2 mb-2">
            <strong>{r.user.login}</strong> — {r.state}
          </div>
        ))}
      </section>
    </main>
  );
}
