import React, { useState } from "react";

export default function AddToDo(props) {
  const [item, setItem] = useState(null);

  function addTodo(event) {
    event.preventDefault();
    props.addItem(item);
  }

  function update(event) {
    event.preventDefault();
    setItem(event.target.value);
  }

  return (
    <div className="AddToDo">
      <form>
        <input text="text" placeholder="add todo" onChange={update} />
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}
