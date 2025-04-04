"use client";

import { ReactNode } from "react";
import RootFooter from "./components/RootFooter";
import RootHeader from "./components/RootHeader";

type LootLayoutProps = {
  children: ReactNode;
};

export default function AnonLayout({ children }: LootLayoutProps) {
  return (
    <>
      <RootHeader />
      <body>{children}</body>
      <RootFooter />
    </>
  );
}
