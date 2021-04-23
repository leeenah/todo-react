import React from "react";

import "./Todo.css";

export default function Todo(props) {
  var listItems = props.items.map((items, index) => (
    <li key={index}>
      {items}
      <button className="delete" onClick={removeTodo.bind(this, index)}>
        [X]
      </button>
    </li>
  ));

  function removeTodo(indexToDelete) {
    props.removeItem(indexToDelete);
  }

  return (
    <div className="Todo">
      <ul>{listItems} </ul>
    </div>
  );
}
