import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "i18n Test Project",
  description: "Multilingual support test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
