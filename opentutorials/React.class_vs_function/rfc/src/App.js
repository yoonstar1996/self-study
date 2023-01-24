import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Hello World</h1>
        <input
          type="button"
          value="FuncButton"
          onClick={() => {
            setFuncShow(!funcShow);
          }}
        />
        <input
          type="button"
          value="ClassButton"
          onClick={() => {
            setClassShow(!classShow);
          }}
        />
        {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
        {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
      </div>
    </>
  );
}

let funcStyle = "color:blue";
let funcId = 0;
function FuncComp(props) {
  const [number, setNumber] = useState("?");
  const [_date, setDate] = useState(new Date().toString());

  useEffect(() => {
    console.log(
      "%cfunc => useEffect (componentDidMount) " + ++funcId,
      funcStyle
    );
    document.title = number;
    return () => {
      console.log(
        "%cfunc => useEffect return (componentWillUnmount)" + ++funcId,
        funcStyle
      );
    };
  }, []);
  // side effect
  useEffect(() => {
    console.log(
      "%cfunc => useEffect number (componentDidMount & componentDidUpdate) " +
        ++funcId,
      funcStyle
    );
    document.title = number;
    return () => {
      console.log(
        "%cfunc => useEffect number return (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
    };
  }, [number]);

  useEffect(() => {
    console.log(
      "%cfunc => useEffect _date (componentDidMount & componentDidUpdate) " +
        ++funcId,
      funcStyle
    );
    document.title = _date;
    return () => {
      console.log(
        "%cfunc => useEffect _date return (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
    };
  }, [_date]);

  // setInterval(() => {
  //   setDate(new Date().toString());
  // }, 1000);
  console.log("%cfunc => render " + ++funcId, funcStyle);
  return (
    <>
      <div className="container">
        <h2>function style component</h2>
        <p>Number : {number}</p>
        <p>Date : {_date}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            setNumber(Math.floor(Math.random() * 10) + 1);
          }}
          q
        />
        <input
          type="button"
          value="date"
          onClick={() => {
            setDate(new Date().toString());
          }}
        />
      </div>
    </>
  );
}

let classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: "?",
    date: new Date().toString(),
  };
  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  render() {
    console.log("%cclass => render", classStyle);
    return (
      <>
        <div className="container">
          <h2>class style component</h2>
          <p>Number : {this.state.number}</p>
          <p>Date : {this.state.date}</p>
          <input
            type="button"
            value="radom"
            onClick={function () {
              this.setState({ number: Math.random() });
            }.bind(this)}
          />
          <input
            type="button"
            value="date"
            onClick={function () {
              this.setState({ date: new Date().toString() });
            }.bind(this)}
          />
        </div>
      </>
    );
  }
}

export default App;
