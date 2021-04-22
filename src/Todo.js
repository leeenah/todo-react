import React, { useState } from "react";

import "./Todo.css";

export default function Todo(props) {
  var listItems = props.items.map((items, index) => (
    <li key={index}>
      {items}
      <button className="delete" onClick={removeItem.bind(this, index)}>
        [X]
      </button>
    </li>
  ));

  function removeItem(indexToDelete) {
    //props.addItem(item);
  }

  return (
    <div className="Todo">
      <ul>{listItems} </ul>
    </div>
  );
}
