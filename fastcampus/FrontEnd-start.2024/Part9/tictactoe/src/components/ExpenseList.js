import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpnseList.css";

export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className="list">
          <ExpenseItem />
        </ul>
        <button className="btn">목록 지우기</button>
      </>
    );
  }
}
