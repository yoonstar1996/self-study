"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          i18n 테스트 프로젝트 / i18n Test Project
        </h1>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
