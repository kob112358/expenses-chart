import "./App.css";
import { useState } from "react";
import Card from "./components/UI/Card";
import ExpenseChart from "./components/ExpenseCard/ExpenseChart.js";
import SpendingData from "./assets/data";

function App() {
  return (
    <div className="App">
      <Card className=" balance-header">
        <div>
          <h4>My balance</h4>
          <h3>$921.48</h3>
        </div>
        <i class="fa-solid fa-landmark"></i>
      </Card>
      <Card className=" chart-card">
        <h3>Spending - Last 7 days</h3>
        <ExpenseChart dailyExpenditures={SpendingData} />
        <div className="chart-footer">
          <div>
            <h4>Total this month</h4>
            <h2>$478.33</h2>
          </div>
          <div>
            <h2>+2.4%</h2>
            <h4>from last month</h4>
          </div>
        </div>
      </Card>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/kob112358">
          Eric Kobliska
        </a>
        .
      </div>
    </div>
  );
}

export default App;
