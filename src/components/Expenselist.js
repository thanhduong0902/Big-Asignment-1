import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function Expenselist(props) {
  const [year, setYear] = useState("");
  const getYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="list">
      <label className="filter">
        Filter by year
        <select className="year" onChange={getYear}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
        <button onClick={() => props.filter(year)}>Lọc</button>
      </label>
      <div className="list-expense">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            text={item.text}
            price={item.price}
            date={item.date}
            deleteItem={props.deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenselist;
