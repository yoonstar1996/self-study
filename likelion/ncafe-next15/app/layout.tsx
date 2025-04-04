"use client";

import "newtil-css/dist/style.min.css";
import "./global.css";

import { ReactNode } from "react";

type LootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title</title>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
