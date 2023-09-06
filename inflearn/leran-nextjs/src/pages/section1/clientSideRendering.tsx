import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/section1/NoSSR"), {
  ssr: false,
});

export default function Index() {
  const [data, setData] = useState(0);
  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <>
      <h1>clientSideRendering Page</h1>
      <div>값 : {data}</div>

      <h1>No SSR</h1>
      <NoSSR />
    </>
  );
}
