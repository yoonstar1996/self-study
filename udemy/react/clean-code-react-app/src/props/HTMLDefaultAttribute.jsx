import React from "react";

const MyButton = ({ children, ...rest }) => {
  <button {...rest}>{children}</button>;
};

function HTMLDefaultAttribute() {
  return (
    <>
      <MyButton className="mt-0" type="submit">
        Clean Code
      </MyButton>

      <input type="number" maxLength={99} />
    </>
  );
}

export default HTMLDefaultAttribute;
