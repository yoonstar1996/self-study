"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { routing } from "@/i18n/routing";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  // 현재 locale 추출 (예: /ko/about → ko)
  const segments = pathname.split("/");
  const currentLocale = routing.locales.includes(
    segments[1] as (typeof routing.locales)[number]
  )
    ? (segments[1] as (typeof routing.locales)[number])
    : routing.defaultLocale;

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // URL의 locale 세그먼트를 새 언어로 교체
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";

    router.push(newPath);
  };

  return (
    <nav className="flex gap-4 mb-5 items-center">
      <Link href={`/${currentLocale}`}>Home</Link>
      <Link href={`/${currentLocale}/about`}>About</Link>
      {/* 언어 선택 셀렉트 */}{" "}
      <select
        value={currentLocale}
        onChange={handleLocaleChange}
        className="ml-auto border px-2 py-1"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === "ko" ? "한국어" : "English"}
          </option>
        ))}
      </select>
    </nav>
  );
}
