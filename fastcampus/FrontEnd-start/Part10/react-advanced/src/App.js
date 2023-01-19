import React, { Component } from "react";
import { useRef } from "react";
import { useState } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// const Person = React.memo(({ name, age }) => {
// shouldComponentUpdate(previousProps) {
//   for (const key in this.props) {
//     if (previousProps[key] !== this.props[key]) {
//       return true;
//     }
//   }
//   return false;
// }

//   console.log("Person render");
//   return (
//     <>
//       {name} / {age}
//     </>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "mark", age: 39 },
//       { id: 2, name: "hana", age: 29 },
//     ],
//   });
//   const toPersonClick = React.useCallback(() => {}, []);

//   const { text, persons } = state;
//   return (
//     <>
//       <input type="text" value={text} onChange={_change}></input>
//       <ul>
//         {persons.map((person) => {
//           return (
//             <Person
//               {...person}
//               key={person.id}
//               onClick={toPersonClick}
//             ></Person>
//           );
//         })}
//       </ul>
//     </>
//   );

//   function _change(e) {
//     setState({ ...state, text: e.target.value });
//   }
// }

// export default function App() {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             onClick={close}
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </>
//   );
// }

export default function App() {
  const myInputRef = useRef();
  const click = () => {
    console.log(myInputRef.current.value);
  };
  return (
    <>
      <MyInput ref={myInputRef}></MyInput>
      <button onClick={click}>send</button>
    </>
  );
}
