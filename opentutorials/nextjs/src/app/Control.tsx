"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  return (
    <footer>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        {id ? (
          <>
            <li>
              <Link href={`/update/${id}`}>Update</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  const options = { method: "DELETE" };
                  fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}` + `topics/${id}`,
                    options
                  )
                    .then((resp) => resp.json())
                    .then((result) => {
                      router.push("/");
                      router.refresh();
                    });
                }}
              >
                delete
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </footer>
  );
}
