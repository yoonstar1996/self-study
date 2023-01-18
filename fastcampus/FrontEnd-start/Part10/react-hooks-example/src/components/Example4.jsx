import React, { Component } from "react";

export default class Example4 extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h2>You clicked {count} times</h2>
        <button onClick={this.click}>Click me</button>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}
