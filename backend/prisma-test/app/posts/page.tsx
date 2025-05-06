import Link from "next/link";
import { Post } from "@/domain/entities/Post";

export default async function Posts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/posts`
  );
  const posts = (await res.json()) as Post[];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="flex items-center">
              <span className="font-semibold">{post.title}</span>
              <span className="text-sm text-gray-600 ml-2">
                by {post.author.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
