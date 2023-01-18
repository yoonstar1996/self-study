import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";

const PrimaryStyledButton = styled(StyledButton)`
  background: coral;
  color: white;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  color: ${(props) => props.color || "pink"};
  border: 2px solid ${(props) => props.color || "pink"};
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 0 1em;
  font-size: 20px;

  :hover {
    border: 3px solid red;
  }
  ::before {
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          <StyledButton primary>버튼</StyledButton>
          <PrimaryStyledButton>버튼</PrimaryStyledButton>
          <StyledButton as="a" href="/">
            버튼
          </StyledButton>
          <StyledButton as={UppercaseButton}>button</StyledButton>
          <StyledMyButton color="green">My button</StyledMyButton>
          <StyledA href="https://google.com">태그</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
