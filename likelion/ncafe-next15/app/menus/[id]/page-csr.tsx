"use client";

import { JSX } from "react";
import { useParams } from "next/navigation";

export default function MenuDetailPage(): JSX.Element {
  const { id } = useParams();
  return <main>상세 페이지 : {id}</main>;
}
