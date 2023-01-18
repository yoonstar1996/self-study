import React from "react";
import { useState } from "react";

// export default function A() {
//   const [value, setValue] = useState("아직 안바뀜");
//   return (
//     <>
//       <B value={value}></B>
//       <button onClick={click}>E의 값을 바꾸기</button>
//     </>
//   );

//   function click() {
//     setValue("E의 값을 변경");
//   }
// }

// function B({ value }) {
//   return (
//     <>
//       <p>여긴 B</p>
//       <C value={value}></C>
//     </>
//   );
// }

// function C({ value }) {
//   return (
//     <>
//       <p>여긴 C</p>
//       <D value={value}></D>
//     </>
//   );
// }

// function D({ value }) {
//   return (
//     <>
//       <p>여긴 D</p>
//       <E value={value}></E>
//     </>
//   );
// }

// function E({ value }) {
//   return (
//     <>
//       <p>여긴 E</p>
//       <h3>{value}</h3>
//     </>
//   );
// }

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <>
      <p>{value}</p>
      <B setValue={setValue}></B>
    </>
  );
}

function B({ setValue }) {
  return (
    <>
      <p>여긴 B</p>
      <C setValue={setValue}></C>
    </>
  );
}

function C({ setValue }) {
  return (
    <>
      <p>여긴 C</p>
      <D setValue={setValue}></D>
    </>
  );
}
function D({ setValue }) {
  return (
    <>
      <p>여긴 D</p>
      <E setValue={setValue}></E>
    </>
  );
}

function E({ setValue }) {
  return (
    <>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </>
  );
  function click() {
    setValue("A의 값을 변경");
  }
}
