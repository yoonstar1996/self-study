import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-5 p-5">
          <Link href="/">Home</Link>
          <Link href="/editor">Editor</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
