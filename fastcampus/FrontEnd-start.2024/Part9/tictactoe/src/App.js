import React, { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const [allMount, setAllMount] = useState(0);

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  useEffect(() => {
    expenses.map((expense) => {
      console.log(expense.amount);
    });
  }, []);

  return (
    <main className="main-container">
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
      </div>

      <div style={{ display: "flex", justifyContent: "end", margin: "1rem" }}>
        <p style={{ fontSize: "2rem" }}>
          총 지출 : <span>원</span>
        </p>
      </div>
    </main>
  );
};

export default App;
