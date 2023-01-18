import React, { Component } from "react";

export default class ControlledComponent extends Component {
  state = {
    value: "",
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <input value={value} onChange={this.change}></input>
        <button onClick={this.click}>전송</button>
      </>
    );
  }

  change = (e) => {
    this.setState({ value: e.target.value });
  };

  click = () => {
    console.log(this.state.value);
  };
}
