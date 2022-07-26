import React from "react";
import "./ExpenseChart.css";
import { useState } from "react";
import ExpenseBar from "./ExpenseBar";

const ExpenseChart = (props) => {

  const highestDay = Math.max(...props.dailyExpenditures.map((o) => o.amount));
  const dailyBar = props.dailyExpenditures.map((day) => {
    return (<div>
      <ExpenseBar
        style={{ height: (day.amount / highestDay) * 100 }}
        day={day.day}
        amount={day.amount}
      />
      <div>{day.day}</div></div>
    );
  });

  return <div className="bar-chart">{dailyBar}</div>;
};

export default ExpenseChart;
