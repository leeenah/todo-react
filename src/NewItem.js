import React from "react";

export default function NewItem(props) {
  return (
    <div className="NewItem">
      <ul>
        <li>apples</li>
        <li>bananas</li>
        <li>oranges</li>
        <li>{props.fruit}</li>
      </ul>
    </div>
  );
}
