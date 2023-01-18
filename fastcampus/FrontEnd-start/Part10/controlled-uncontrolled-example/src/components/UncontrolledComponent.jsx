import React, { Component } from "react";

export default class UncontrolledComponent extends Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <>
        <input ref={this.inputRef}></input>
        <button onClick={this.click}>전송</button>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value)를 꺼내서 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input.value);
    console.log(this.inputRef.current.value);
  };
}
