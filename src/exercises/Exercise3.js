import React, { useState, useEffect } from "react";
import { fetchExpenses } from "../data/utils";

export default function Exercise3() {
  const [month, setMonth] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const getMonthExpenses = async () => {
      const monthExpenses = await fetchExpenses(month);
      setExpenses(monthExpenses);
    };
    getMonthExpenses();
  }, [month]);

  function selectMonthHandler(event) {
    setMonth(months.indexOf(event.target.value));
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select value={month} onChange={selectMonthHandler}>
          <option hidden>Select month...</option>
          {months.map((month, val) => (
            <option key={val} value={month}>
              {month}
            </option>
          ))}
        </select>
        <div>
          {expenses.map((expense, val) => (
            <div key={val}>
              {expense.item} {expense.amount} <div>{expense.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
