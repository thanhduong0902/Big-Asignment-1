import React, { useState } from "react";

function Filterexpense(props) {
  const [year, setYear] = useState("");
  const filterYear = (e) => {
    setYear(e.target.value);
  };
  props.filter(year);
  return (
    <label className="filter">
      Filter by year
      <select className="year" onChange={filterYear}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </label>
  );
}

export default Filterexpense;
