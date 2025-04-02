"use client";

import Link from "next/link";

export default function RootHeader() {
  return (
    <header>
      <h1>Root Header</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/menus"}>Menus</Link>
          </li>
          <li>
            <Link href={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
