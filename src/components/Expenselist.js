import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenselist(props) {
  return (
    <div className="list-expense">
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          text={item.text}
          price={item.price}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Expenselist;
