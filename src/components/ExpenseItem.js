import React from "react";

function ExpenseItem(props) {
  return (
    <div className="item">
      <div className="time">{props.date}</div>
      <div className="title">{props.text}</div>
      <div className="price">{props.price}</div>
      <button className="delete" onClick={() => props.deleteItem(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
