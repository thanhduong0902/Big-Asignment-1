import { useState } from "react";
import "./App.css";
import Expenselist from "./components/Expenselist";
import React from "react";
import Additem from "./components/AddItem";
import Filterexpense from "./components/Filterexpense";
function App() {
  const [items, setItems] = useState([
    {
      text: "Some book",
      date: "2022-03-26",
      price: "$ 50",
    },
    {
      text: "Electric Bill",
      date: "2022-03-26",
      price: "$ 70",
    },
    {
      text: "House",
      date: "2022-03-27",
      price: "$1000",
    },
  ]);
  const additem = (value, amount, date) => {
    setItems([...items, { text: value, date: date, price: amount }]);
  };
  // const filter = (year) => {
  //   const yearft = items.filter((item) => {
  //     if (year === new Date(item.date).getFullYear()) {
  //       return true;
  //     }
  //     return false;
  //   });
  // };

  const addyear = (year) => {
    year = Number(year);
    let array = items.filter((item) => {
      if (year === new Date(item.date).getFullYear()) return true;
      return false;
    });
    console.log(array);
  };
  return (
    <div className="App">
      <Additem additem={additem} />
      <Filterexpense filter={addyear} />
      <Expenselist items={items} />
    </div>
  );
}

export default App;
