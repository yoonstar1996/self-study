import { users } from "@/data/users";

export async function GET() {
  return Response.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  users.push(newUser);
  return Response.json(newUser, { status: 201 });
}
