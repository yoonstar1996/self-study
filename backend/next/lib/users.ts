import { UsersResponse } from "@/type/User";

export const fetchUsers = async (): Promise<UsersResponse> => {
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

export const updateUser = async (_id: string, name: string, email: string) => {
  await fetch(`/api/users/${_id}`, {
    method: "PUT",
    body: JSON.stringify({ name, email }),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteUser = async (_id: string) => {
  await fetch(`/api/users/${_id}`, { method: "DELETE" });
};
