import React, { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      임시 서치바
      {children}
    </div>
  );
}
