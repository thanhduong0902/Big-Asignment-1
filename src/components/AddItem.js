import React, { useState } from "react";

function Additem(props) {
  const [value, setValue] = useState("");
  const nameChange = (e) => {
    setValue(e.target.value);
  };
  const [amount, setAmount] = useState("");
  const amountChange = (e) => {
    setAmount(e.target.value);
  };
  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="add-expense">
      <form>
        <div className="name-item">
          Name
          <input
            type="text"
            placeholder="Enter name here"
            className="name"
            value={value}
            onChange={nameChange}
          />
        </div>
        <div className="amount-item">
          Amount
          <input
            type="text"
            placeholder="Enter amount here"
            className="amount"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <div className="date-item">
          Date
          <input
            type="date"
            placeholder="dd-mm-yy"
            className="date"
            value={date}
            onChange={dateChange}
          />
        </div>
        <button
          className="add"
          onClick={(e) => {
            e.preventDefault();
            props.additem(value, amount, date);
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Additem;
