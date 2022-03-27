import React from "react";

function ExpenseItem(props) {
  return (
    <div className="item">
      <div className="time">{props.date}</div>
      <div className="title">{props.text}</div>
      <div className="price">{props.price}</div>
    </div>
  );
}

export default ExpenseItem;
