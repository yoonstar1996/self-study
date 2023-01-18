// import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  color: pink;
  border: 2px solid pink;
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 0 1em;
  font-size: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: pink;
      color: white;
    `}
`;

export default StyledButton;
