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
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>Posts</Link>
          <Link href={"/posts/new"}>New</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
