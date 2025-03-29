import { User } from "@/type/User";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("/api/users");
  return res.json();
};

export const createUser = async (name: string, email: string) => {
  await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: { "Content-Type": "application/json" },
  });
};

export const updateUser = async (id: number, name: string, email: string) => {
  await fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, email }),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteUser = async (id: number) => {
  await fetch(`/api/users/${id}`, { method: "DELETE" });
};
