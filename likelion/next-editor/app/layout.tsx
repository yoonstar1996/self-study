import "./globals.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-5 p-5 bg-gray-400 mb-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/tip-tap"}>Tip-tap</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
