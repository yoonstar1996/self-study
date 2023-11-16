"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

export default function Create() {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value || "";
    const body = bodyRef.current?.value || "";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}` + "topics",
        options
      );
      const result = await response.json();
      console.log(result);
      const lastId = result.id;
      router.refresh();
      router.push(`/read/${lastId}`);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" name="title" ref={titleRef} placeholder="title" />
      </p>
      <p>
        <textarea name="body" ref={bodyRef} placeholder="body" />
      </p>
      <p>
        <button type="submit">create</button>
      </p>
    </form>
  );
}
