import ClientComponent from "@/components/client-component";
import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div>
      search page {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
