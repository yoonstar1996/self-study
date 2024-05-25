ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// 위 JSX를 JS로 바꾸면 아래와 같이 된다.

ReactDOM.render(
  React.createElement("div", { id: "msg" }, "Hello World!"),
  mountNode
);
