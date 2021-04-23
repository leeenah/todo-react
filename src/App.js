import React, { useState } from "react";

import Todo from "./Todo.js";
import AddToDo from "./AddToDo.js";

import "./App.css";

function App() {
  const [items, setItems] = useState([
    "apples",
    "bananas",
    "oranges",
    "pears",
    "make pavel smile",
  ]);

  function addItem(item) {
    var temp = [];
    items.forEach((element) => {
      temp.push(element);
    });
    temp.push(item);
    setItems(temp);
  }

  function removeItem(indexToDelete) {
    var completedTodo = [];
    items.forEach((element, index) => {
      if (indexToDelete !== index) {
        completedTodo.push(element);
      }
    });
    setItems(completedTodo);
  }

  return (
    <div className="App">
      <h1>todo list:</h1>
      <Todo items={items} removeItem={removeItem} />
      <AddToDo addItem={addItem} />
    </div>
  );
}

export default App;
