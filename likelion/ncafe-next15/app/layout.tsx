"use client";

import { ReactNode } from "react";
import RootFooter from "./components/RootFooter";
import RootHeader from "./components/RootHeader";

type LootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <RootHeader />
        {children}
        <RootFooter />
      </body>
    </html>
  );
}
