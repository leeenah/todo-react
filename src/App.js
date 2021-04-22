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

  function removeItem(index) {
    //sane as addItem, create temp array with everything thats in items - 1 at index
    // set item to this new array
    // pass this removeItem function to the Todo component
    //
    // var editedItems = [];
    // items.forEach((element, index) => {
    //   if (indexToDelete !== index) {
    //     editedItems.push(element);
    //   }
    // });
    // setItems(editedItems);
  }

  return (
    <div className="App">
      <h1>todo list:</h1>
      <Todo items={items} />
      <AddToDo addItem={addItem} />
    </div>
  );
}

export default App;
