// app/repos/[owner]/[repo]/commits/[sha]/page.tsx
"use client";

import { useEffect, useState } from "react";

import { getCommitDetail } from "@/lib/github";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface FileDiff {
  filename: string;
  patch: string;
}

export default function CommitDetailPage() {
  const { owner, repo, sha } = useParams() as {
    owner: string;
    repo: string;
    sha: string;
  };
  const { data: session, status } = useSession();
  const [files, setFiles] = useState<FileDiff[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      getCommitDetail(session!.accessToken!, owner, repo, sha)
        .then((detail) => {
          const safeFiles = detail.files.map((f: any) => ({
            filename: f.filename,
            patch: f.patch || "",
          }));
          setFiles(safeFiles);
        })
        .catch(() => setError("커밋 정보를 불러오는 중 오류가 발생했습니다."));
    }
  }, [status, session, owner, repo, sha]);

  if (status === "loading") return <p>로딩 중…</p>;
  if (status === "unauthenticated") return <p>로그인이 필요합니다.</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">
        {repo} @ {sha.slice(0, 7)}
      </h1>

      {files.map((file, idx) => (
        <section key={idx} className="mb-6">
          <h2 className="font-medium mb-2">{file.filename}</h2>
          <div className="border rounded overflow-auto">
            {file.patch.split("\n").map((line, i) => {
              const bg = line.startsWith("+")
                ? "bg-green-100"
                : line.startsWith("-")
                ? "bg-red-100"
                : "bg-transparent";
              const text = line.startsWith("+")
                ? "text-green-800"
                : line.startsWith("-")
                ? "text-red-800"
                : "text-gray-800";
              return (
                <pre
                  key={i}
                  className={`${bg} ${text} whitespace-pre-wrap font-mono p-1`}
                >
                  {line}
                </pre>
              );
            })}
          </div>
        </section>
      ))}
      <div className="mt-4">
        <Link
          href={`/repos/${owner}/${repo}`}
          className="text-blue-600 hover:underline"
        >
          ← 커밋 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
