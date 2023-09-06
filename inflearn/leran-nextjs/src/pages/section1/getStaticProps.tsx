import React from "react";

interface Props {
  data: number;
}

export default function Index({ data }: Props) {
  return (
    <>
      <h1>getStaticProps Page</h1>
      <div>값 : {data}</div>
    </>
  );
}

export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise(
    (resolve) => setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    // setTimeout(() => resolve(1), delayInSeconds * 1000)
  );

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}
