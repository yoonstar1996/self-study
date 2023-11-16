"use client";

import { useParams, useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useRef, useState } from "react";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value || "";
    const body = bodyRef.current?.value || "";

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}` + `topics/${id}`,
        options
      );
      const result = await response.json();
      console.log(result);
      const lastId = result.id;
      router.push(`/read/${lastId}`);
      router.refresh();
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}` + `topics/${id}`)
      .then((resp) => resp.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="title"
          ref={titleRef}
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          ref={bodyRef}
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">update</button>
      </p>
    </form>
  );
}
