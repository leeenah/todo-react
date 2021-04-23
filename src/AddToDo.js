import React, { useState } from "react";

export default function AddToDo(props) {
  const [item, setItem] = useState("");

  function addTodo(event) {
    event.preventDefault();
    props.addItem(item);
    setItem("");
  }

  function update(event) {
    event.preventDefault();
    setItem(event.target.value);
  }

  return (
    <div className="AddToDo">
      <form>
        <input
          value={item}
          text="text"
          placeholder="add todo"
          onChange={update}
        />
        <button onClick={addTodo} disabled={item === ""}>
          Add
        </button>
      </form>
    </div>
  );
}
