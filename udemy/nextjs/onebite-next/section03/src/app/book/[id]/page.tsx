import React from "react";

export default function Page({
  params,
}: {
  params: { id?: string | string[] };
}) {
  return <div>Book/[id] Page {params.id}</div>;
}
