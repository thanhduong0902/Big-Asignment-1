import { useState } from "react";
import "./App.css";
import Expenselist from "./components/Expenselist";
import React from "react";
import Additem from "./components/AddItem";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "Some book",
      date: "2022-03-26",
      price: "$ 50",
    },
    {
      id: uuidv4(),
      text: "Electric Bill",
      date: "2022-03-26",
      price: "$ 70",
    },
    {
      id: uuidv4(),
      text: "House",
      date: "2022-03-27",
      price: "$ 1000",
    },
  ]);
  const additem = (value, amount, date) => {
    setItems([
      ...items,
      { text: value, date: date, price: amount, id: uuidv4() },
    ]);
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const filter = (year) => {
    const updatedItems = items.filter(
      (item) => new Date(item.date).getFullYear() === Number(year)
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <Additem additem={additem} />
      <Expenselist items={items} deleteItem={deleteItem} filter={filter} />
    </div>
  );
}

export default App;
