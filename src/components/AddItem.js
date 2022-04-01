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
  const [isAdd, setIsAdd] = useState(false);
  let button = null;
  if (isAdd) {
    button = (
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
        <div className="btn">
          <button
            onClick={() => {
              setIsAdd(false);
            }}
          >
            CANCEL
          </button>
          <button
            className="add"
            onClick={(e) => {
              e.preventDefault();
              props.additem(value, amount, date);
            }}
          >
            ADD
          </button>
        </div>
      </form>
    );
  } else {
    button = (
      <button className="add-new" onClick={() => setIsAdd(true)}>
        ADD NEW EXPENSE
      </button>
    );
  }
  return <div className="add-expense">{button}</div>;
}

export default Additem;

