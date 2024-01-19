import React, { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList />
        </div>

        <div style={{ display: "flex", justifyContent: "end", margin: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총 지출 : <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}
