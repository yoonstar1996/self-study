import { connectDB } from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const db = await connectDB();

  const todos = await db
    .collection("todos")
    .find({})
    .sort({ createdAt: -1 })
    .limit(50)
    .toArray();

  const users = await db.collection("users").find({}).toArray();

  const userMap = new Map(
    users.map((user) => [user._id.toString(), user.name || "익명 사용자"])
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold">모든 사람의 To-do List</h1>
        <div className="flex gap-2">
          {session ? (
            <>
              <Link
                href="/todo"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                내 Todo-List
              </Link>
              <Link
                href="/api/auth/signout"
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                로그아웃
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="bg-fuchsia-500 text-white px-4 py-2 rounded"
              >
                회원가입
              </Link>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                로그인
              </Link>
            </>
          )}
        </div>
      </div>

      {/* 전체 투두 리스트 표시 */}
      <ul className="space-y-2">
        {todos.map((todo: any) => (
          <li
            key={todo._id.toString()}
            className="border px-4 py-2 rounded bg-white shadow flex justify-between items-center"
          >
            <span className={todo.isDone ? "line-through text-gray-400" : ""}>
              {todo.content}
            </span>
            <span className="text-sm text-gray-500">
              by {userMap.get(todo.userId?.toString())}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
