"use client";

import Basket from "./components/Basket";
import { ReactNode } from "react";

type LootLayoutProps = {
  children: ReactNode;
};

export default function MenusLayout({ children }: LootLayoutProps) {
  return (
    <>
      {children}
      <Basket />
    </>
  );
}
