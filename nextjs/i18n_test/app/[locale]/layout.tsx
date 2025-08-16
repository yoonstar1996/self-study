import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { use } from "react";
import enMessages from "@/messages/en.json";
import koMessages from "@/messages/ko.json";
import Navbar from "@/components/Navbar";

type LocaleLayoutProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>;

const SUPPORTED_LOCALES = ["ko", "en"] as const;

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = use(params);
    
    if (!SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number])) {
        notFound();
    }

    const messages = locale === "en" ? enMessages : koMessages;

    return (
        <html lang={locale} className="light">
            <body className="bg-white text-gray-900">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
