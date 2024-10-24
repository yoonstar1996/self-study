import React from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);
  return (
    <>
      <p>Results</p>
    </>
  );
}
