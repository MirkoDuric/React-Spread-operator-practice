import React, { useState } from "react";

function App() {
  const [inputValue, setValue] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    setValue(event.target.value);
    console.log(inputValue);
  }
  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputValue];
    });
    setValue("");
    console.log(items);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputValue} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
