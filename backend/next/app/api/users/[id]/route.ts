import { users } from "@/data/users";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const idx = users.findIndex((user) => user.id === Number(params.id));
  if (idx === -1) return Response.json({ error: "유저 없음" }, { status: 404 });

  users[idx] = { ...users[idx], ...body };
  return Response.json(users[idx]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  users.splice(
    users.findIndex((user) => user.id === Number(params.id)),
    1
  );
  return Response.json({ message: "삭제 완료" });
}
