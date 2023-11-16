"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <div>Hello, WEB !</div>
      <Image
        src="/myPicture.jpg"
        alt="myPicture"
        width={200}
        height={200}
      ></Image>
    </>
  );
}
