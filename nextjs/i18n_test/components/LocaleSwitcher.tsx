"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type SupportedLocale = "ko" | "en";

function setLocaleCookie(locale: SupportedLocale) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
}

function buildPathWithLocale(pathname: string, locale: SupportedLocale) {
    const segments = pathname.split("/");
    if (segments.length > 1 && (segments[1] === "ko" || segments[1] === "en")) {
        segments[1] = locale;
        return segments.join("/");
    }
    return `/${locale}${pathname === "/" ? "" : pathname}`;
}

function getCurrentLocale(pathname: string): SupportedLocale {
    const segments = pathname.split("/");
    if (segments.length > 1 && (segments[1] === "ko" || segments[1] === "en")) {
        return segments[1] as SupportedLocale;
    }
    return "ko"; // 기본값
}

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    
    const currentLocale = getCurrentLocale(pathname);

    const switchTo = (locale: SupportedLocale) => {
        startTransition(() => {
            setLocaleCookie(locale);
            const newPath = buildPathWithLocale(pathname, locale);
            router.replace(newPath);
        });
    };

    return (
        <select
            className="rounded border px-3 py-1 bg-white text-gray-900"
            onChange={(e) => switchTo(e.target.value as SupportedLocale)}
            disabled={isPending}
            value={currentLocale}
        >
            <option value="ko">한국어</option>
            <option value="en">English</option>
        </select>
    );
}
