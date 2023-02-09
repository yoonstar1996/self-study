import { useRouter } from "next/router";
import React from "react";

export default function PostAll() {
  const router = useRouter();

  const { slug } = router.query;

  console.log(router.query);
  return (
    <>
      <h1>PostAll : {slug}</h1>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: "my-blog-test" } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    // props:
  };
}
