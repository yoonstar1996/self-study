import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/section1/getStaticProps");
  }, [router]);
  return (
    // <main>
    //   <h1>Links</h1>
    //   {/* <div style={{ height: "200vh" }}></div> */}

    //   {/* <a href={"/section1/getStaticProps"}>/getStaticProps</a> */}
    //   <Link href={"/section1/getStaticProps"} style={{ color: "red" }}>
    //     /getStaticProps
    //   </Link>
    // </main>

    <main>
      <h1>Routers</h1>
      <button
        onClick={() => {
          router.push("/section1/getStaticProps");
        }}
      >
        /getStaticProps
      </button>
    </main>
  );
}
