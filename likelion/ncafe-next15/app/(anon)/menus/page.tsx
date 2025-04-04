"use client";

import { JSX } from "react";

import Link from "next/link";

export default function MenuPage(): JSX.Element {
  return (
    <main>
      목록 페이지
      <Link href={"/menus/1"}>상세 페이지 1</Link>
      <Link href={"/menus/2"}>상세 페이지 2</Link>
    </main>
  );
}
