import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("실행중");
  return (
    <main>
      <Header />
      <p>🔥 Lets get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
